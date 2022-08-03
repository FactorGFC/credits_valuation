class EventMailer < ApplicationMailer
  default from: 'sistemasfgfc@gmail.com'

  def new_event_email event, user
    @event = event
    @user  = user
    mail(to: "#{@user[:email]}", subject: "¡Nueva reunión!")
  end

  def update_event_email event, user
    @event    = event
    @user     = user
    @requests = EventRequest.where(event_id: event.id).order(:id)
    mail(to: "#{@user[:email]}", subject: "¡Se ha actualizado una reunión!")
  end

end
