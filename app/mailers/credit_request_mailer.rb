class CreditRequestMailer < ApplicationMailer
  default from: 'sistemasfgfc@gmail.com'

  def new_credit_request_email
    @request_data = params[:request_data]

    mail(to: "#{@request_data[:user][:email]}", subject: "¡Recibimos tu solicitud de registro!")
  end


  def credit_request_approved
    @request_data = params[:request_data]


    mail(to: "#{@request_data[:user][:email]}", subject: "¡Tu solicitud de registro ha sido aprobada!")
  end

  def credit_request_refused
    @request_data = params[:request_data]

    mail(to: "#{@request_data[:user][:email]}", subject: "Tu solicitud de registro ha sido rechazada")
  end

  def calendar_assigned_mail
    @request_data = params[:request_data]
    mail(to: "#{@request_data[:user][:email]}", subject: "Solicitud de captura de información financiera.")
  end

  def request_analyst_assigned
    @request_data = params[:request_data]
    mail(to: "#{@request_data[:user][:email]}", subject: "¡Nueva solicitud de afiliación asignada!")
  end
end
