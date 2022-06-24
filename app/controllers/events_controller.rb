class EventsController < ApplicationController
  protect_from_forgery

  def index
    @users            = User.all
    @next_events      = Event.where('start_date >= ?', Date.today()).order(:start_date)
    @pending_events   = Event.where(event_finished: [false, nil]).order(:start_date)
    @finished_events  = Event.where(event_finished: true).order(:start_date)
  end

  def get_events
    events = Event.all

    render :json => events.map {|event| {
        id:         event.id,
        start:      event.start_date.strftime('%Y-%m-%dT%H:%M:%S'),
        end:        event.try(:end_date).try(:strftime, '%Y-%m-%dT%H:%M:%S'),
        title:      event.title,
        description:event.description,
        allDay:     false
    }}
  end

  def get_event_info
    event    = Event.find(params[:id])
    user_ids = EventDetail.where(event_id: event.id).pluck(:user_id)

    render :json => {
        id:         event.id,
        start:      event.start_date.strftime('%Y-%m-%dT%H:%M:%S'),
        end:        event.try(:end_date).try(:strftime, '%Y-%m-%dT%H:%M:%S'),
        title:      event.title,
        description:event.description,
        event_type: event.event_type,
        url:        event.url,
        location:   event.location,
        user_ids:   user_ids
    }
  end

  def save_event
    event_params = params[:event]
    users_ids = params[:users].map(&:to_i)

    #Validar si ya existe
    if event_params[:id].present?
      event = Event.where(id: event_params[:id]).try(:first)
      event.update(title:  event_params[:title], description: event_params[:description], start_date: event_params[:date_time], event_type: event_params[:event_type], url: event_params[:url], location: event_params[:location])

      event_users = EventDetail.where(event_id: event.id).pluck(:user_id)

      new_records       = (users_ids - event_users)
      destroy_records   = (event_users - users_ids)

      begin
        EventDetail.where(event_id: event.id, user_id: destroy_records).destroy_all
        EventDetail.transaction do
          new_records.each do |e|
            EventDetail.create(event_id: event.id, user_id: e)
          end
        end

        users_ids.each do |id|
          EventMailer.update_event_email(event, User.find(id)).deliver
        end

        redirect_to "/events", notice: "Evento actualizado correctamente."
      rescue StandardError => e
        p "Error: #{e}"
      end

    else
      event = Event.new(title:  event_params[:title], description: event_params[:description], start_date: event_params[:date_time], event_type: event_params[:event_type], url: event_params[:url], location: event_params[:location])
      respond_to do |format|
        if event.save
          users_ids.each do |user_id|
            EventDetail.create(event_id: event.id, user_id: user_id)
            EventMailer.new_event_email(event, User.find(user_id)).deliver
          end
          format.html { redirect_to '/events', notice: 'Evento guardado exitosamente.' }
          format.json { render json: {event: event} }
        else
          format.json { render json: {event: event} }
        end
      end
    end
  end

  def save_event_agreement
    event_params = params[:event]

    event = Event.where(id: event_params[:id]).try(:first)
    event.update(agreements:  event_params[:agreements])
    redirect_to "/events", notice: "Evento actualizado correctamente."

  end

  def update
    event = Event.find(params["id"])
    event.text = params["text"]
    event.start_date = params["start_date"]
    event.end_date = params["end_date"]
    event.save

    render :json=>{:action => "updated"}
  end

  def delete
    event = Event.find(params["id"])
    EventDetail.where(event_id: event.id).destroy_all
    event.destroy

    respond_to do |format|
      format.html { redirect_to events_path, notice: "Evento eliminado exitosamente." }
      format.json { head :no_content }
    end
  end

  def finish_event
    event = Event.find(params["id"])
    event.update(event_finished: true)

    respond_to do |format|
      format.html { redirect_to events_path, notice: "Evento finalizado." }
      format.json { head :no_content }
    end
  end
end
