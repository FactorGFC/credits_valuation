class CreditRequestMailer < ApplicationMailer
  default from: 'sistemasfgfc@gmail.com'

  def new_credit_request_email
    @request_data = params[:request_data]
    @company      = params[:company]
    mail(to: "#{@request_data[:user][:email]}", subject: "¡Recibimos tu solicitud de registro!")
    @company.update(welcome_message: true)
  end


  def credit_request_approved
    @request_data = params[:request_data]
    @company      = params[:company]

    mail(to: "#{@request_data[:user][:email]},factorglobal.mailer@gmail.com", subject: "¡Tu solicitud de registro ha sido aprobada!")
    @company.update(confirmation_message: true)
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

  def capture_enabled
    @user     = params[:user]
    @company  = params[:company]
    mail(to: "#{@user[:email]}", subject: "¡Se ha habilitado de nuevo la captura de datos!")
  end

  def denied_validated
    @request_data = params[:request_data]
    mail(to: "#{@request_data[:user][:email]}", subject: "¡La solicitud ha sido rechazada!")
  end

  def confirmation_code
    @code   = params[:code]
    @email  = params[:email]
    mail(to: @email, subject: "Código de confirmación")
  end

  def credit_bureau_error company
    @company = company
    mail(to: 'alexrdgz03@gmail.com', subject: "Código de confirmación")
  end
end
