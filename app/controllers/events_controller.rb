class EventsController < ApplicationController
  protect_from_forgery

  def index
    @users            = User.where(role_id: Role.where(key:['committee', 'credit_management', 'credit_area', 'promotion_area']).pluck(:id))
    @requests         = Request.where(process_status_id: ProcessStatus.where(key: 'success_by_credit_area').pluck(:id))
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
    request_ids = EventRequest.where(event_id: event.id).pluck(:request_id)

    render :json => {
        id:         event.id,
        start:      event.start_date.strftime('%Y-%m-%dT%H:%M:%S'),
        end:        event.try(:end_date).try(:strftime, '%Y-%m-%dT%H:%M:%S'),
        title:      event.title,
        description:event.description,
        event_type: event.event_type,
        url:        event.url,
        location:   event.location,
        user_ids:   user_ids,
        request_ids:  request_ids
    }
  end

  def save_event
    event_params  = params[:event]
    users_ids     = params[:users].present? ? params[:users].map(&:to_i) : []
    requests_ids  = params[:requests].present? ? params[:requests].map(&:to_i) : []

    #Validar si ya existe
    if event_params[:id].present?
      event = Event.where(id: event_params[:id]).try(:first)
      event.update(title:  event_params[:title], description: event_params[:description], start_date: event_params[:date_time], event_type: event_params[:event_type], url: event_params[:url], location: event_params[:location])

      event_users       = EventDetail.where(event_id: event.id).pluck(:user_id)
      new_records       = (users_ids - event_users)
      destroy_records   = (event_users - users_ids)

      event_request_ids       = EventRequest.where(event_id: event.id).pluck(:request_id)
      new_event_requests      = (requests_ids - event_request_ids)
      destroy_event_requests  = (event_request_ids - requests_ids)

      begin

        EventDetail.where(event_id: event.id, user_id: destroy_records).destroy_all
        EventDetail.transaction do
          new_records.each do |e|
            EventDetail.create(event_id: event.id, user_id: e)
          end
        end

        EventRequest.where(event_id: event.id, request_id: destroy_event_requests).destroy_all
        EventRequest.transaction do
          new_event_requests.each do |event_request|
            EventRequest.create(event_id: event.id, request_id: event_request)
          end
        end


        #Send email confirmation
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

          requests_ids.each do |request_id|
            EventRequest.create(event_id: event.id, request_id: request_id)
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


  def agreements

    @event = Event.where(id: params[:id])
    @process_status = ProcessStatus.where(key:['committee_approved','committee_rejected','committee_pending'])

    @attendants = EventDetail.where(event_id: params[:id])

    @requests = EventRequest.where(event_id: params[:id]).order(:id)
    # @requests = Request.where(id: request_ids)

    #@search_event = event.ransack(params[:q])
    #@events = @search_event.result.paginate(page: params[:page], per_page: get_pagination).order('id DESC')
  end

  def update_event_agreement
    # puts params['requests']
    pending_status_id = ProcessStatus.find_by_key('pending').try(:id)
    params['requests'].each do |key, request|
      event_request = EventRequest.where(event_id: params[:event_id], request_id: request['request_id']).try(:first)

      if event_request.present?
        if request['process_status_id'].blank?
          event_request.update(process_status_id: pending_status_id, comment: request['comment'])
        else
          event_request.update(process_status_id: request['process_status_id'], comment: request['comment'])
        end
      end
    end

    redirect_to "/events", notice: "Evento actualizado correctamente."
  end

  def update_attendants
    attendants = params['attendants']

    attendants.each do |attendant|

      if(attendant.second['attended'])
        att = EventDetail.find(attendant.second['id'].to_i)
        att.update(attended: true)
      else
        att = EventDetail.find(attendant.second['id'].to_i)
        att.update(attended: false)
      end

    end

    redirect_to "/agreements/" + params[:agreements_id], notice: "Evento actualizado correctamente."

  end

  def print_agreement

    @event = Event.find(params[:id])
    @process_status = ProcessStatus.where(key:['committee_approved','committee_rejected','committee_pending'])

    @attendants = EventDetail.where(event_id: params[:id])

    @requests = EventRequest.where(event_id: params[:id]).order(:id)

    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "Minuta",
               template: "events/print_agreement.html.slim",
               type: "application/pdf",
               disposition: "inline",
               encoding: 'UTF-8',
               dpi: '300'
      end
    end
  end

  def events_finished
    @search_events = Event.where(event_finished: true).ransack(params[:q])
    @events = @search_events.result.order(created_at: :desc).paginate(page: params[:page], per_page: get_pagination)
  end

end
