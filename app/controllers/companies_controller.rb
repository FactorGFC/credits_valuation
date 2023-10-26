class CompaniesController < ApplicationController
  require 'base64'
  include CompaniesHelper
  before_action :set_company, only: %i[ show edit update destroy company_details open_pdf generate_financial_reasons save_data_crec_sost save_data_cobertura_deuda save_data_deuda_fin_lp save_extra_data dictamen_report  generate_cash_flow bureau_report]
  helper_method :translate_errors, :get_company_info, :get_payments_frecuency, :method_payment

  skip_before_action :verify_authenticity_token, only: [:send_buro_confirm_code]

  # GET /companies or /companies.json
  def index
    @user = current_user

    if params[:company_id].present?
      @user.update company_id: params[:company_id]
    end

    if @user.enterprise?
      @search_companies = policy_scope(Company).ransack(params[:q])
      @company = @search_companies.result.first

      @company_rfc = @user.try(:company).try(:rfc)

      if @company.complete

        @search_credit_bureaus = CreditBureau.where(company_id: params[:id])
        @credit_bureau = @search_credit_bureaus.last

        if (@user.company.info_company.nil? || @user.company.info_company['hydra:title'] == 'An error occurred') && @user.company.status_company_id == StatusCompany.where(key: 'aprobada').first.id
          if @user['sat_id'].present?
            @info = SatW.get_tax_status @user.try(:company).try(:rfc)

            @user.company.update(info_company: @info)
          end

        end

        if (@user.company.credential_company.nil? || @user.company.credential_company['hydra:title'] == 'An error occurred') && @user.company.status_company_id == StatusCompany.where(key: 'aprobada').first.id

          if @user['sat_id'].present?
            @credential = SatW.get_credential @user['sat_id']

            @user.company.update(credential_company: @credential)
          end

        end

      else
        redirect_to '/request_steps'
      end
    else
      redirect_to '/login'
    end

  end

  def data_company

    @search_companies = policy_scope(Company).ransack(params[:q])
    @company = @search_companies.result.first

  end

  # GET /companies/1 or /companies/1.json
  def show
  end

  # GET /companies/new
  def new
    @company = Company.new
  end

  # GET /companies/1/edit
  def edit
  end

  # POST /companies or /companies.json
  def create
    user_params = {
      first_name: params[:company_user][:first_name],
      last_name: params[:company_user][:last_name],
      phone: params[:company_user][:phone],
      email: params[:company_user][:email]
    }
    company_params = {
      rfc: params[:company][:rfc],
      name: params[:company][:name],
      address: params[:company][:address],
      status_company_id: params[:company][:status_company_id]
    }

    user = User.new(user_params)

    company = Company.new(company_params)

    if company['sat_id'].present?
      sat_id = company['sat_id']
    else
      sat_id = nil
    end

    respond_to do |format|
      if User.find_by(email: user_params[:email]).present?
        format.html { redirect_to new_company_path, alert: 'Correo ' + user_params[:email] + ' ya registrado' }
      else

        if company.save
          if user.id
            user.company_id = company.id
            user.sat_id = sat_id
          else
            new_password = [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join

            user.company_id = company.id
            user.role_id = Role.find_by_key('enterprise').try(:id).present? ? Role.find_by_key('enterprise').try(:id) : 4
            user.password = new_password
            user.password_confirmation = new_password
            user.new_password = new_password
            user.sat_id = sat_id

            user.skip_confirmation!
          end

          if user.save
            #Envia correo
            if company.status_company.key == 'aprobada'
              CreditRequestMailer.with(request_data: { user: user, company: company }).credit_request_approved.deliver_now
            elsif company.status_company.key == 'rechazada'
              CreditRequestMailer.with(request_data: { user: user, company: company }).credit_request_refused.deliver_now
            end

            format.html { redirect_to companies_path, notice: t('notifications_masc.success.resource.created',
                                                                resource: t('roles.form.resource')) }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: user.errors, status: :unprocessable_entity }
          end
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: company.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /companies/1 or /companies/1.json
  def update
    process_date

    s3 = Aws::S3::Resource.new(access_key_id: 'AKIAWRCSQFXT4UEWO2PS', region: 'us-east-1',
                               secret_access_key: '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')
    bucket_name = 'analisisbucket'

    respond_to do |format|
      if @company.update(company_params)
        if company_params[:company_file_attributes].present?
          if company_params[:company_file_attributes][:authorization_file].present?

            # invoice_authorization = [*('a'..'z'),*('0'..'9')].shuffle[0,8].join
            # file = File.open(Rails.root.join(company_params[:company_file_attributes][:authorization_file]))
            # p "file ------------------------------------------------------------"
            # p file
            # obj = s3.bucket(bucket_name).object("credits_valuation/#{invoice_authorization}/#{@filename}")
            # obj.put(
            #     body: file,
            #     acl: "public-read" # optional: makes the file readable/downloadable by anyone
            # )
            # file.close

            # authorization_file = Base64.strict_encode64(company_params[:company_file_attributes][:authorization_file].read)
            # @company.company_file.update(authorization_file: authorization_file,invoice_authorization: invoice_authorization)

          end
          if company_params[:company_file_attributes][:id_file].present?

            invoice_id_file = @company.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join
            file_id_file = File.open(Rails.root.join(company_params[:company_file_attributes][:id_file]))
            name_id_file = company_params[:company_file_attributes][:id_file].original_filename.gsub(/\s+/, "")

            obj_id_file = s3.bucket(bucket_name).object("credits_valuation/#{invoice_id_file}/#{name_id_file}")
            obj_id_file.put(
              body: file_id_file,
              acl: "public-read" # optional: makes the file readable/downloadable by anyone
            )

            file_id_file.close

            # id_file = Base64.strict_encode64(company_params[:company_file_attributes][:id_file].read)
            @company.company_file.update(invoice_id_file: invoice_id_file, name_id_file: name_id_file)

          end
          if company_params[:company_file_attributes][:constancy_file].present?
            invoice_constancy = @company.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join

            file_constancy = File.open(Rails.root.join(company_params[:company_file_attributes][:constancy_file]))
            name_constancy = company_params[:company_file_attributes][:constancy_file].original_filename.gsub(/\s+/, "")
            obj_constancy = s3.bucket(bucket_name).object("credits_valuation/#{invoice_constancy}/#{name_constancy}")
            obj_constancy.put(
              body: file_constancy,
              acl: "public-read" # optional: makes the file readable/downloadable by anyone
            )
            file_constancy.close

            # constancy_file = Base64.strict_encode64(company_params[:company_file_attributes][:constancy_file].read)
            @company.company_file.update(invoice_constancy: invoice_constancy, name_constancy: name_constancy)
          end
          if company_params[:company_file_attributes][:financial_statements_one_file].present?
            invoice_financial_statements_one = @company.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join

            file_statements_one = File.open(Rails.root.join(company_params[:company_file_attributes][:financial_statements_one_file]))
            name_statements_one = company_params[:company_file_attributes][:financial_statements_one_file].original_filename.gsub(/\s+/, "")

            obj_statements_one = s3.bucket(bucket_name).object("credits_valuation/#{invoice_financial_statements_one}/#{name_statements_one}")
            obj_statements_one.put(
              body: file_statements_one,
              acl: "public-read" # optional: makes the file readable/downloadable by anyone
            )

            file_statements_one.close

            # financial_statements_one_file = Base64.strict_encode64(company_params[:company_file_attributes][:financial_statements_one_file].read)
            @company.company_file.update(invoice_financial_statements_one: invoice_financial_statements_one,
                                         name_financial_statements_one: name_statements_one)
          end
          if company_params[:company_file_attributes][:financial_statements_two_file].present?
            invoice_financial_statements_two = @company.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join

            file_statements_two = File.open(Rails.root.join(company_params[:company_file_attributes][:financial_statements_two_file]))
            name_statements_two = company_params[:company_file_attributes][:financial_statements_two_file].original_filename.gsub(/\s+/, "")
            obj_statements_two = s3.bucket(bucket_name).object("credits_valuation/#{invoice_financial_statements_two}/#{name_statements_two}")
            obj_statements_two.put(
              body: file_statements_two,
              acl: "public-read" # optional: makes the file readable/downloadable by anyone
            )
            file_statements_two.close

            # financial_statements_two_file = Base64.strict_encode64(company_params[:company_file_attributes][:financial_statements_two_file].read)
            @company.company_file.update(invoice_financial_statements_two: invoice_financial_statements_two,
                                         name_financial_statements_two: name_statements_two)
          end
          if company_params[:company_file_attributes][:financial_statements_parcial_file].present?
            invoice_financial_statements_parcial = @company.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join

            file_statements_parcial = File.open(Rails.root.join(company_params[:company_file_attributes][:financial_statements_parcial_file]))
            name_statements_parcial = company_params[:company_file_attributes][:financial_statements_parcial_file].original_filename.gsub(/\s+/, "")
            obj_statements_parcial = s3.bucket(bucket_name).object("credits_valuation/#{invoice_financial_statements_parcial}/#{name_statements_parcial}")
            obj_statements_parcial.put(
              body: file_statements_parcial,
              acl: "public-read" # optional: makes the file readable/downloadable by anyone
            )
            file_statements_parcial.close

            # financial_statements_parcial_file = Base64.strict_encode64(company_params[:company_file_attributes][:financial_statements_parcial_file].read)
            @company.company_file.update(invoice_financial_statements_parcial: invoice_financial_statements_parcial,
                                         name_financial_statements_parcial: name_statements_parcial)
          end
        end
        format.html { redirect_to '/home_company', notice: "La compañia se actualizó correctamente." }
        format.json { render :show, status: :ok, location: @company }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @company.errors, status: :unprocessable_entity }
      end
    end
  end

  def encode_image file
    Base64.strict_encode64(file.read)
  end

  # DELETE /companies/1 or /companies/1.json
  def destroy
    @company.destroy

    respond_to do |format|
      format.html { redirect_to companies_url, notice: "Company was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  # Completar datos de compañia, usuario
  def update_complete_data

    @user = current_user
    @company = current_user.company
    user_params = params[:user]
    @error = false



    if @company.buro_confirmation_code.to_s === params[:confirmation_code].to_s


      respond_to do |format|
        @error = false
        @buro = create_buro @company.info_company, @user.try(:phone)
        Rails.logger.info "@buro ---------------------------------------------------------------------------------------------------"
        Rails.logger.info @buro
        if @buro
          if @company.update(buro_id: @buro.first['id'])
            if @user.try(:company).try(:rfc) == 'FGL190102DH6'
              @bureau_report = BuroCredito.get_report_by_id 108752#97831 #4450 60368
            elsif @user.try(:company).try(:rfc) == 'POMV850113GYA'
              @bureau_report = BuroCredito.get_report_by_id 540288 #4450 60368
            else
              @bureau_report = BuroCredito.get_buro_report(@buro.first['id'], @company.info_company)['results'].try(:first)
            end
            Rails.logger.info "@bureau_report -----------------------------------------------------------------------------"
            Rails.logger.info @bureau_report


            if @bureau_report.present?
              if @bureau_report['status'] != 'SUCCESS'
                Rails.logger.info "@status -----------------------------------------------------------------------------"
                Rails.logger.info @bureau_report
                CreditRequestMailer.credit_bureau_error(@company, @bureau_report).deliver_now
                @error = true
                msj_buro = 'Sin historial crediticio'
                if @bureau_report['response'] && @bureau_report['response']['respuesta'] && @bureau_report['response']['respuesta']['msjError']
                  msj_buro = @bureau_report['response']['respuesta']['msjError']
                  #format.json { render json: { error: true, message: 'Error de Moffin status: ' + msj_buro } }
                end
                if @company.update(step_two: true) and @user.update(phone: user_params[:phone])
                  format.html { redirect_to '/request_steps', notice: msj_buro }
                  format.json { render :show, status: :ok, location: @company }
                else
                  format.html { render '/request_steps', status: :unprocessable_entity }
                  format.json { render json: @company.errors, status: :unprocessable_entity }
                end
              end
            else
              Rails.logger.info "@ no present -----------------------------------------------------------------------------"
              Rails.logger.info @bureau_report
              CreditRequestMailer.credit_bureau_error(@company, @bureau_report).deliver_now
              @error = true
              format.json { render json: { error: true, message: '(Error de buro - moffin 2)Hubo un error favor volver a intentar' } }
            end

            unless @error

              @bureau_info = BuroCredito.get_buro_info @buro.first['id'], @company.info_company


              if CreditBureau.create(company_id: @company.id, bureau_report: @bureau_report, bureau_id: @buro.first['id'], bureau_info: @bureau_info)
                @clients = get_clients_sat @user.try(:company)

                if @clients
                  @providers = get_providers_sat @user.try(:company)
                  if @providers
                    @financial_institutions = create_financial_institutions @bureau_report, @company.id
                    if @company.update(step_two: true) and @user.update(phone: user_params[:phone])
                      format.html { redirect_to '/request_steps', notice: "Datos actualizados correctamente." }
                      format.json { render :show, status: :ok, location: @company }
                    else
                      format.html { render '/request_steps', status: :unprocessable_entity }
                      format.json { render json: @company.errors, status: :unprocessable_entity }
                    end
                  else
                    format.json { render json: { error: true, message: '(1)Hubo un error favor volver a intentar' } }
                  end
                else
                  format.json { render json: { error: true, message: '(2)Hubo un error favor volver a intentar' } }
                end
              else
                format.json { render json: { error: true, message: '(3)Hubo un error favor volver a intentar' } }
              end
            else
              format.json { render json: { error: true, message: '(4)Hubo un error favor volver a intentar' } }
            end
          else
            format.json { render json: { error: true, message: '(4)Hubo un error favor volver a intentar' } }
          end
        else
          format.json { render json: { error: true, message: '(5)Hubo un error favor volver a intentar' } }
        end
      end
    else
      respond_to do |format|
        format.json { render json: { error: true, message: 'Error de moffin - 100' } }
      end
    end
  end

  def company_details
    sort_order = %w(anual trimestral mensual)
    @user = current_user
    @periods = Calendar.all.order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.period_type) }
    @calendar_periods_bs = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_periods_is = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'income_statement').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @bs_comments = Comment.where(company_id: @company.id, assigned_to: 'balance_sheet').order(:created_at).limit(5)
    @is_comments = Comment.where(company_id: @company.id, assigned_to: 'income_statement').order(:created_at).limit(5)
    @fr_comments = Comment.where(company_id: @company.id, assigned_to: 'financial_reasons').order(:created_at).limit(5)
    @cb_comments = Comment.where(company_id: @company.id, assigned_to: 'credit_bureau').order(:created_at).limit(5)
    @cf_comments = Comment.where(company_id: @company.id, assigned_to: 'cash_flow').order(:created_at).limit(5)
    @financial_inst = @company.financial_institutions
    @bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)

    @requests = policy_scope(Request).where(company_id: params[:id]).order(created_at: :asc) #.distinct.select('on (analyst_id) *')

    @process_status = policy_scope(ProcessStatus)
    @can_assign_period = can_assign_periods(@company)

    if @company.balance_sheet_finished and @company.income_statement_finished
      @process_status += ProcessStatus.where(key: ['denied_validated_period', 'success_validated_period'])
    end

    if @company.cash_flow.present?
      @cash_flow = @company.cash_flow.group_by { |c| [c['date']] }
    else
      @cash_flow = []
    end

    if @company.f_reasons_company.present?
    else

    end

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          #@company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
          if @company.try(:info_company)['hydra:member'][0]['company']['tradeName'].present?
            @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
          else
            @company_name = @company.try(:info_company)['hydra:member'][0]['company']['legalName']
          end
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end

    credit_bureaus = @company.try(:credit_bureaus).try(:last)

    if credit_bureaus.present? #@company.credit_bureaus.present?
      if credit_bureaus.bureau_report['results'].present?
        if credit_bureaus.bureau_report['results'][0]['response'].present?
          @report_result = credit_bureaus.bureau_report['results'][0]
        else
          @report_result = credit_bureaus.bureau_report['results'][1]
        end
      else
        @report_result = credit_bureaus.bureau_report
      end

      @credit_bureau = credit_bureaus

      if @company.try(:client_type) == 'PF'


=begin
        if @report_result&.dig('response', 'return', 'Personas','Persona')
          @score = @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito']['ScoreBC'][0]['ValorScore'].to_i
        else
          @score = 0
        end
=end

        #if @report_result && @report_result['response'] && @report_result['response']['return'] && @report_result['response']['return']['Personas']


          #if @report_result['response'].present?
        if @report_result && @report_result['response'] && @report_result['response']['return'] && @report_result['response']['return']['Personas']

            if @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito'].present?
            @score = @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito']['ScoreBC'][0]['ValorScore'].to_i
          else
            @score = 0
          end
        else
          @score = 0
        end
      end

    end

    respond_to do |format|
      format.html
      # format.pdf { render  template: "companies/credit_bureau", pdf: "Reporte Buró de Crédito", type: "application/pdf" }   # Excluding ".pdf" extension.
      format.pdf do
        render pdf: "Reporte Buró de Crédito",
               template: "companies/credit_bureau.html.slim",
               type: "application/pdf",
               disposition: "inline"
      end
    end

  end

  def avg_gagement credit_bureau
    total = 0
    total_ones = 0
    if credit_bureau['bureau_report'].present?
      credit_bureau['bureau_report']['results'][0]['response']['return']['Personas']['Persona'][0]['Cuentas']['Cuenta'].pluck('HistoricoPagos').each do |credit|
        credit.each_char do |char|
          total += 1
          if char == '1'
            total_ones += 1
          end
        end
      end
    else
      total = 1
    end

    return (total_ones * 100) / total
  end

  def validate_company

    approved_company = params[:approved]
    company = Company.find(params[:id].to_i)
    user = company.user

    if approved_company == "true"
      status = StatusCompany.where(key: 'aprobada').first
    else
      status = StatusCompany.where(key: 'rechazada').first
    end

    request_data = {
      user: user,
      company: company
    }

    respond_to do |format|
      if company.update(status_company_id: status.id)
        if approved_company == "true"

          #Send Mail to Company, is approved by FACTOR
          CreditRequestMailer.with(request_data: request_data, company: company).credit_request_approved.deliver_now
          #Send MSG to Company, is approved by FACTOR
          Company.send_msj_to_company company, user, 2

          format.html { redirect_to '/login', notice: "La compañia ha sido aprobada." }
          format.json { head :no_content }
        else
          Company.send_msj_to_company company, user, 3

          format.html { redirect_to '/login', notice: "La compañia ha sido rechazada." }
          format.json { head :no_content }
          CreditRequestMailer.with(request_data: request_data).credit_request_refused.deliver_now
        end
      else
        format.html { redirect_to '/login', notice: "La compañia no ha podido ser aprobada." }
        format.json { head :no_content }
      end

    end
  end

  #Metodo para asignar calendario a la compañia y eliminar registros de los calendarios eliminados de la selección
  def assign_calendar
    records_exists = false
    calendar_ids = params[:periods].present? ? params[:periods].map(&:to_i) : []
    company_calendars = CompanyCalendarDetail.where(company_id: params[:company_id], assign_to: 'balance_sheet').pluck(:calendar_id)

    #TODO: Evaluar las que ya tengan captura para no eliminar.

    new_records = (calendar_ids - company_calendars)
    destroy_records = (company_calendars - calendar_ids)

    #Valida si existe captura para no eliminar
    IncomeCalendarDetail.where(company_id: params[:company_id], calendar_id: destroy_records).each do |ic_detail|
      if ic_detail
        records_exists = true
        destroy_records.delete ic_detail.calendar_id
      end
    end
    BalanceCalendarDetail.where(company_id: params[:company_id], calendar_id: destroy_records).each do |bc_detail|
      if bc_detail
        records_exists = true
        destroy_records.delete bc_detail.calendar_id
      end
    end

    begin
      CompanyCalendarDetail.where(company_id: params[:company_id], assign_to: 'balance_sheet', calendar_id: destroy_records).destroy_all
      CompanyCalendarDetail.where(company_id: params[:company_id], assign_to: 'income_statement', calendar_id: destroy_records).destroy_all
      CompanyCalendarDetail.transaction do
        new_records.each do |e|
          CompanyCalendarDetail.create(company_id: params[:company_id], calendar_id: e, assign_to: 'balance_sheet')
          CompanyCalendarDetail.create(company_id: params[:company_id], calendar_id: e, assign_to: 'income_statement')
        end

        CreditRequestMailer.with(request_data: { user: Company.find(params[:company_id]).user, company: Company.find(params[:company_id]) }).calendar_assigned_mail.deliver_now
      end
      if new_records.length > 0
        Company.find(params[:company_id]).update(income_statement_finished: false, balance_sheet_finished: false)
      end

      redirect_to "/company_details/#{params[:company_id]}", notice: records_exists ? "Creado. Algunos calendarios no se pudieron eliminar ya que existen registros." : "Creado exitosamente."
    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def assign_details_to_request
    company = Company.find(params[:company_id])
    request = params[:request_id].present? ? Request.find(params[:request_id]) : nil
    request_params = params[:request]

    p "ENTRE AL METODO ---------------------------------------------------------------------------------------------------------------------"
    if params[:request].present?
      p "IF ---------------------------------------------------------------------------------------------------------------------"

      request_params[:company_id] = params[:company_id]
      request_params[:process_status_id] = ProcessStatus.first_step unless request_params[:process_status_id].present?
      request_params[:factor_credit_id] = nil unless request_params[:factor_credit_id].present?
      request_params[:user_id] = current_user.id

      analyst_user = User.find(request_params[:analyst_id])

      if request
        p "request --------------------------------------------------------"
        tmp_analyst = request.analyst_id
        if request.update(analyst_id: request_params[:analyst_id].present? ? request_params[:analyst_id] : request.analyst_id, process_status_id: request_params[:process_status_id], factor_credit_id: request_params[:factor_credit_id], user_id: current_user.id)
          p "etnre 1 ------------------------------------------------------------------------"
          if ProcessStatus.find_by_id(request_params[:process_status_id]).try(:key) == 'denied_validated_period'
            CreditRequestMailer.with(request_data: { user: company.user, company: company }).denied_validated.deliver_now
          end
          if request.analyst_id != tmp_analyst
            CreditRequestMailer.with(request_data: { user: analyst_user, company: company }).request_analyst_assigned.deliver_now
          end

          if request_params[:process_status_id].to_i == ProcessStatus.where(key: 'analist').first.try(:id)
            p "etnre 2 ------------------------------------------------------------------------"
            CreditRequestMailer.with(request_data: { user: analyst_user, company: company }).request_analyst_assigned.deliver_now
          end
          redirect_to "/company_details/#{params[:company_id]}", notice: "Actualizado correctamente."
        else
          p "entre ---------------"
          redirect_to "/company_details/#{params[:company_id]}", alert: request.errors.full_messages.join(' ')
        end
      else
        new_request = Request.new(company_id: params[:company_id], analyst_id: request_params[:analyst_id].present? ? request_params[:analyst_id] : request.analyst_id, process_status_id: ProcessStatus.first_step, factor_credit_id: request_params[:factor_credit_id], user_id: current_user.id)

        if new_request.save
          CreditRequestMailer.with(request_data: { user: analyst_user, company: company }).request_analyst_assigned.deliver_now

          redirect_to "/company_details/#{params[:company_id]}", notice: "Guardado correctamente."
        else
          redirect_to "/company_details/#{params[:company_id]}", alert: new_request.errors.full_messages.join(' ')
        end
      end
    else
      redirect_to "/company_details/#{params[:company_id]}", alert: "Hubo un error."
    end

  end

  def assign_pdf_to_request
    s3 = Aws::S3::Resource.new(access_key_id: 'AKIAWRCSQFXT4UEWO2PS', region: 'us-east-1',
                               secret_access_key: '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')
    bucket_name = 'analisisbucket'

    request = params[:request_id].present? ? Request.find(params[:request_id]) : nil

    if request
      invoice_id_file = request.id.to_s + [*('a'..'z'), *('0'..'9')].shuffle[0, 8].join
      file_id_file = File.open(Rails.root.join(params[:user][:file_name]))
      name_id_file = params[:user][:file_name].original_filename.gsub(/\s+/, "")

      obj_id_file = s3.bucket(bucket_name).object("credits_valuation/#{invoice_id_file}/#{name_id_file}")
      obj_id_file.put(
        body: file_id_file,
        acl: "public-read" # optional: makes the file readable/downloadable by anyone
      )

      file_id_file.close

      if request.update(file_id: invoice_id_file, file_name: name_id_file)
        redirect_to "/company_details/#{request.company_id}", notice: "Actualizado correctamente."
      else
        redirect_to "/company_details/#{request.company_id}", alert: request.errors.full_messages.join(' ')
      end
    end

  end

  def translate_errors message
    if message == 'rfc: This value is not valid.'
      new_message = 'El R.F.C no es valido'
    elsif message == 'password: This value is too short. It should have 8 characters or more.'
      new_message = 'La contraseña es muy corta, debe contener al menos 8 caracteres.'
    else
      new_message = message
    end

    return new_message

  end

  def get_company_info info
    if info.present?
      result = info['hydra:member'].try(:first)['person']['curp'] + ' - ' + info['hydra:member'].try(:first)['person']['fullName']
    else
      result = '--'
    end
    return result
  end

  def request_steps
    @user = current_user
    @search_companies = policy_scope(Company).ransack(params[:q])
    @company = @search_companies.result.first

    @step_one_value = @company.step_one
    @step_two_value = @company.step_two && @company.step_one
    @step_three_value = @company.step_three && @company.step_two && @company.step_one #  && !@company.has_clients
    @step_four_value = @company.step_four && @company.step_three && @company.step_two && @company.step_one # && !@company.has_providers
    @step_five_value = @company.step_five && @company.step_four && @company.step_three && @company.step_two && @company.step_one # && !@company.has_providers
    @step_complete_value = @company.complete

    if @company.complete
      redirect_to companies_path
    else

      @credit_types = CreditType.all
      unless @company.number_collaborator.present?
        @company.build_number_collaborator
      end
      unless @company.company_file.present?
        @company.build_company_file
      end

      @company_rfc = @user.try(:company).try(:rfc)
    end

  end

  def balance_sheet_request
    sort_order = %w(mensual trimestral anual)

    @company = Company.find(params[:company_id])
    @balance_concepts = BalanceConcept.where(ancestry: nil, active: true)
    @calendar_periods = CompanyCalendarDetail.where(company_id: @company.try(:id), assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| -sort_order.index(calendar_p.calendar.period_type) }
    @data_captured = @calendar_periods.length == CompanyCalendarDetail.where(company_id: @company.try(:id), assign_to: 'balance_sheet', capture_finished: true).count

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end
  end

  def income_statement_capture
    sort_order = %w(mensual trimestral anual)

    @company = Company.find(params[:company_id])
    @concepts = IncomeStatementConcept.where(ancestry: nil, active: true)
    @calendar_periods = CompanyCalendarDetail.where(company_id: @company.try(:id), assign_to: 'income_statement').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| -sort_order.index(calendar_p.calendar.period_type) }
    @data_captured = @calendar_periods.length == CompanyCalendarDetail.where(company_id: @company.try(:id), assign_to: 'income_statement', capture_finished: true).count

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end
  end

  def balance_sheet_comparative
    @company = Company.find(params[:id])
    @balance_concepts = BalanceConcept.where(ancestry: nil, active: true)
    #@years = CalendarYear.where(active: true).limit(3).order(year: :desc)
    @calendar_periods = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet')
    @bc_details = @company.balance_calendar_details
  end

  def income_statement_comparative
    @company = Company.find(params[:id])
    @income_values = IncomeCalendarDetail.where(company_id: @company.id)
    @calendar_periods = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'income_statement')
    @ins_details = @company.income_calendar_details

    income_data = @company.income_statment

  end

  def create_balance_sheet_request
    @company = Company.find(params[:company_id])
    value_scale = params[:bs_request][:value_scale]
    submit_type = params[:button]

    begin
      BalanceCalendarDetail.transaction do
        params[:b_sheet].each do |e|
          bs_detail = BalanceCalendarDetail.find_by(balance_concept_key: e[1][:concept], calendar_id: e[1][:period], company_id: @company.id)
          if bs_detail.present?
            raise ActiveRecord::Rollback unless bs_detail.update(value: e[1][:value].present? ? e[1][:value] : 0, value_scale: value_scale)
          else
            raise ActiveRecord::Rollback unless BalanceCalendarDetail.new(balance_concept_key: e[1][:concept], calendar_id: e[1][:period], value: e[1][:value].present? ? e[1][:value] : 0, balance_type: 'FACTOR', company_id: @company.id, value_scale: value_scale).save
          end
        end
      end

      if submit_type == 'finalize'
        @company.company_calendar_details.where(assign_to: 'balance_sheet').update(capture_finished: true)
        redirect_to '/login', notice: "Finalizado y enviado correctamente."
      else
        redirect_to "/balance_sheet_request/#{@company.id}", notice: "Guardado correctamente."
      end

    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def create_income_statement_cap
    @company = Company.find(params[:company_id])
    value_scale = params[:ins_request][:value_scale]
    submit_type = params[:button]
    #p '=entre'
    begin
      IncomeCalendarDetail.transaction do
        params[:b_sheet].each do |e|
          ic_detail = IncomeCalendarDetail.find_by(income_statement_concept_key: e[1][:concept], calendar_id: e[1][:period], company_id: @company.id)
          if ic_detail.present?
            raise ActiveRecord::Rollback unless ic_detail.update(value: e[1][:value].present? ? e[1][:value] : 0, value_scale: value_scale)
          else
            raise ActiveRecord::Rollback unless IncomeCalendarDetail.new(income_statement_concept_key: e[1][:concept], calendar_id: e[1][:period], value: e[1][:value].present? ? e[1][:value] : 0, company_id: @company.id, value_scale: value_scale).save
          end
        end
      end

      if submit_type == 'finalize'
        @company.company_calendar_details.where(assign_to: 'income_statement').update(capture_finished: true)
        redirect_to '/login', notice: "Finalizado y enviado correctamente."
      else
        redirect_to "/income_statement_capture/#{@company.id}", notice: "Guardado correctamente."
      end
    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def change_capture_status
    company = Company.find(params[:id])

    if params[:capture_type] === 'balance_sheet'
      respond_to do |format|
        if company.company_calendar_details.where(assign_to: 'balance_sheet').update(capture_finished: false)
          CreditRequestMailer.with(user: company.user, company: company).capture_enabled.deliver_now
          format.html { redirect_to "/company_details/#{company.id}", notice: "Captura de BALANCE FINANCIERO habilitada." }
        else
          format.json { render json: company.errors, status: :unprocessable_entity }
        end
      end
    else
      respond_to do |format|
        if company.company_calendar_details.where(assign_to: 'income_statement').update(capture_finished: false)
          CreditRequestMailer.with(user: company.user, company: company).capture_enabled.deliver_now
          format.html { redirect_to "/company_details/#{company.id}", notice: "Captura de ESTADO DE RESULTADOS habilitada." }
        else
          format.json { render json: company.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  #Función para generar tabla de razones financieras para la compañia
  def generate_financial_reasons
    sort_order = %w(anual trimestral mensual)
    @bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }

    FReasonsCompany.where(company_id: @company.id).destroy_all
    @calendar_fr.each_with_index do |calendar, calendar_index|
      # capture_type = 1 (VALORES OBTENIDOS DEL SAT)
      # capture_type = 2 (VALORES OBTENIDOS DE CAPTURA)

      months = Company.calculate_months calendar.calendar.period_type

      #####====== CRECIMIENTO NOM. VENTAS Y CRECIMIENTO REAL VENTAS
      if calendar_index - 1 >= 0
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          income_year0 = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 1, @ins_scale)
          income_year1 = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 1, @ins_scale)
          value = Company.calculate_crecimiento_nom_ventas income_year0, income_year1, months, nil
          value_inf = Company.calculate_crecimiento_nom_ventas income_year0, income_year1, months, calendar.calendar.inflation
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_nom_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: (value * 100).round(1))
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_real_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: (value_inf * 100).round(1))
        end

        #CALCULO CON VALORES DE CAPTURA
        income_year0 = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 1, @ins_scale)
        income_year1 = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 1, @ins_scale)
        value = Company.calculate_crecimiento_nom_ventas income_year0, income_year1, months, nil
        value_inf = Company.calculate_crecimiento_nom_ventas income_year0, income_year1, months, calendar.calendar.inflation
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_nom_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: (value * 100).round(1))
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_real_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: (value_inf * 100).round(1))
      else
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_nom_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: 0)
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_nom_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: 0)
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_real_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: 0)
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_real_ventas').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: 0)
      end
      ######===== FIN CRECIMIENTO NOM. VENTAS Y CRECIMIENTO REAL VENTAS

      #####====== ROTACION DE ACTIVOS
      if calendar_index - 1 >= 0
        #Año 1 es referente al año del row actual, el 0 es del año anterior
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          income_year1 = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 1, @ins_scale)
          total_active0 = Company.convert_value_to_units @bs_scale, (calendar_index - 1 < 0 ? nil : (company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, ['1', '2', '3', '4'], @bs_scale) + company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, ['5', '6', '7', '8', '9'], @bs_scale)))
          total_active1 = Company.convert_value_to_units @bs_scale, (company_balance_sheet_value(@company.id, calendar.calendar, ['1', '2', '3', '4'], @bs_scale) + bs_activo_fijo(@company.id, ['5', '6', '8', '9'], calendar.calendar.id, @bs_scale))

          value = Company.calculate_rotacion_activos income_year1, total_active0, total_active1, months
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end

        #CALCULO CON VALORES DE CAPTURA
        income_year1 = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 1, @ins_scale)
        total_active0 = Company.convert_value_to_units @bs_scale, (calendar_index - 1 < 0 ? nil : (bs_capture_sum(@company.id, ['1', '2', '3', '4'], @calendar_fr[calendar_index - 1].calendar.id, @bs_scale) + bs_activo_fijo(@company.id, ['5', '6', '8', '9'], @calendar_fr[calendar_index - 1].calendar.id, @bs_scale)))
        total_active1 = Company.convert_value_to_units @bs_scale, (bs_capture_sum(@company.id, ['1', '2', '3', '4'], calendar.calendar.id, @bs_scale) + bs_activo_fijo(@company.id, ['5', '6', '8', '9'], calendar.calendar.id, @bs_scale))

        value = Company.calculate_rotacion_activos income_year1, total_active0, total_active1, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      else
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: 0)
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: 0)
      end
      #####====== FIN ROTACION DE ACTIVOS

      #####====== MARGEN OPERATIVO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        total_active = Company.convert_value_to_units @bs_scale, company_income_stat_value(@company.id, calendar.calendar, 1, @ins_scale)
        gross_profit = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, @ins_scale)

        value = Company.calculate_margen_operativo total_active, gross_profit
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_operativo').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      total_active = Company.convert_value_to_units @bs_scale, income_calendar_detail_value(@company.id, calendar.calendar, 1, @ins_scale)
      gross_profit = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, @ins_scale)
      value = Company.calculate_margen_operativo total_active, gross_profit
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_operativo').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN MARGEN OPERATIVO

      #####====== RENTABILIDAD BASE CAPITAL (ROE)
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        net_profit = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 14, @ins_scale)
        total_capital0 = Company.convert_value_to_units @bs_scale, (calendar_index - 1 < 0 ? nil : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, ['14', '15', '16', '17'], @bs_scale))
        total_capital1 = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['14', '15', '16', '17'], @bs_scale)
        value = Company.calculate_rentabilidad_base_capital net_profit, total_capital0, total_capital1, months, 'sat'
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rentabilidad_base_capital').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      net_profit = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 14, @ins_scale)
      total_capital0 = Company.convert_value_to_units @bs_scale, (calendar_index - 1 < 0 ? nil : bs_capture_sum(@company.id, ['14', '15', '16', '17'], @calendar_fr[calendar_index - 1].calendar.id, @bs_scale))
      total_capital1 = Company.convert_value_to_units @bs_scale, bs_capture_sum(@company.id, ['14', '15', '16', '17'], calendar.calendar.id, @bs_scale)
      value = Company.calculate_rentabilidad_base_capital net_profit, total_capital0, total_capital1, months, 'cap'
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rentabilidad_base_capital').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN MARGEN OPERATIVO

      #####====== MARGEN NETO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        net_profit = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 14, @ins_scale)
        total_active = Company.convert_value_to_units @bs_scale, company_income_stat_value(@company.id, calendar.calendar, 1, @ins_scale)
        value = Company.calculate_margen_neto net_profit, total_active
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      net_profit = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 14, @ins_scale)
      total_active = Company.convert_value_to_units @bs_scale, income_calendar_detail_value(@company.id, calendar.calendar, 1, @ins_scale)
      value = Company.calculate_margen_neto net_profit, total_active
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN MARGEN NETO

      #####====== PASIVO TOTAL / CAPITAL CONTABLE
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        total_pasive = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['10', '11', '12', '13'], @bs_scale)
        total_capital = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['14', '15', '16', '17'], @bs_scale)
        value = Company.calculate_pasTotal_capContable total_pasive, total_capital
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'pas_total_cap_contable').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      total_pasive = Company.convert_value_to_units @bs_scale, bs_capture_sum(@company.id, ['10', '11', '12', '13'], calendar.calendar.id, @bs_scale)
      total_capital = Company.convert_value_to_units @bs_scale, bs_capture_sum(@company.id, ['14', '15', '16', '17'], calendar.calendar.id, @bs_scale)
      value = Company.calculate_pasTotal_capContable total_pasive, total_capital
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'pas_total_cap_contable').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN PASIVO TOTAL / CAPITAL CONTABLE

      #####====== DIAS CLIENTES
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        clients = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 2, @bs_scale)
        income_vts = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 1, @ins_scale)
        client_days_value_sat = Company.calculate_client_days clients, income_vts, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: client_days_value_sat)
      end
      #CALCULO CON VALORES DE CAPTURA
      clients = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 2, @bs_scale)
      income_vts = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 1, @ins_scale)
      client_days_value_cap = Company.calculate_client_days clients, income_vts, months
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: client_days_value_cap)
      #####====== FIN DIAS CLIENTES

      #####====== DIAS INVENTARIO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        inventory = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 3, @bs_scale)
        sales_costs = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 2, @ins_scale)
        inventory_days_value_sat = Company.calculate_client_days inventory, sales_costs, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_inventario').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: inventory_days_value_sat)
      end
      #CALCULO CON VALORES DE CAPTURA
      inventory = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 3, @bs_scale)
      sales_costs = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 2, @ins_scale)
      inventory_days_value_cap = Company.calculate_client_days inventory, sales_costs, months
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_inventario').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: inventory_days_value_cap)
      #####====== FIN DIAS INVENTARIO

      #####====== DIAS PROVEEDORES
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        providers = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 10, @bs_scale)
        payable_conts_fop = Company.convert_value_to_units @bs_scale, 0
        sales_costs = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 2, @ins_scale)
        provider_days_value_sat = Company.calculate_provider_days providers, payable_conts_fop, sales_costs, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: provider_days_value_sat)
      end
      #CALCULO CON VALORES DE CAPTURA
      providers = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 10, @bs_scale)
      payable_conts_fop = Company.convert_value_to_units @bs_scale, 0
      sales_costs = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 2, @ins_scale)
      provider_days_value_cap = Company.calculate_provider_days providers, payable_conts_fop, sales_costs, months
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'dias_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: provider_days_value_cap)
      #####====== FIN DIAS PROVEEDORES

      #####====== CICLO FINANCIERO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == "anual"
        value = Company.calculate_financial_cycle client_days_value_sat, inventory_days_value_sat, provider_days_value_sat
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'ciclo_financiero').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      value = Company.calculate_financial_cycle client_days_value_cap, inventory_days_value_cap, provider_days_value_cap
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'ciclo_financiero').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN CICLO FINANCIERO

      #####====== INVERSION EN TRABAJO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == "anual"
        clients = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 2, @bs_scale)
        ctas_x_cob_fop = Company.convert_value_to_units @bs_scale, 0
        inventory = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 3, @bs_scale)
        providers = Company.convert_value_to_units @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 10, @bs_scale)
        ctas_x_pag_fop = Company.convert_value_to_units @bs_scale, 0
        value = Company.calculate_investment_in_work clients, ctas_x_cob_fop, inventory, providers, ctas_x_pag_fop
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'inversion_en_trabajo').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      clients = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 2, @bs_scale)
      ctas_x_cob_fop = Company.convert_value_to_units @bs_scale, 0
      inventory = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 3, @bs_scale)
      providers = Company.convert_value_to_units @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 10, @bs_scale)
      ctas_x_pag_fop = Company.convert_value_to_units @bs_scale, 0
      value = Company.calculate_investment_in_work clients, ctas_x_cob_fop, inventory, providers, ctas_x_pag_fop
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'inversion_en_trabajo').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN INVERSION EN TRABAJO

      #####====== COBERTURA DE INTERESES (DEP)
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == "anual"
        utility_op = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, @ins_scale)
        dep_y_amort = Company.convert_value_to_units @ins_scale, 0
        financial_expense = Company.convert_value_to_units @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 7, @ins_scale)

        value = Company.calculate_interest_coverage utility_op, dep_y_amort, financial_expense
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'cobertura_de_intereses').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      utility_op = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, @ins_scale)
      dep_y_amort = Company.convert_value_to_units @ins_scale, 0
      financial_expense = Company.convert_value_to_units @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 7, @ins_scale)

      value = Company.calculate_interest_coverage utility_op, dep_y_amort, financial_expense
      FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'cobertura_de_intereses').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN COBERTURA DE INTERESES (DEP)

    end

    respond_to do |format|
      if true
        format.html { redirect_to "/company_details/#{@company.id}", notice: "Razónes Financieras generadas exitosamente" }
      else
        #format.json { render json: company.errors, status: :unprocessable_entity }
      end
    end

  end

  #Función para generar tabla de flujo de efectivo
  def generate_cash_flow
    sort_order = %w(anual trimestral mensual)
    @bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }

    CompanyFlow.where(company_id: @company.id).destroy_all

    @calendar_fr.each_with_index do |calendar, calendar_index|
      # capture_type = 1 (VALORES OBTENIDOS DEL SAT)
      # capture_type = 2 (VALORES OBTENIDOS DE CAPTURA)

      months = Company.calculate_months calendar.calendar.period_type
      #####====== FLUJO BRUTO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        value = Company.convert_value_to_miles @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, @ins_scale)

        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_bruto').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end
      #CALCULO CON VALORES DE CAPTURA
      value = Company.convert_value_to_miles @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, @ins_scale)

      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_bruto').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN FLUJO BRUTO

      #####====== VARIACIÓN CLIENTES
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        clients_year1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 2, @bs_scale)
        clients_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 2, @bs_scale))

        value = Company.calculate_customer_variation clients_year1, clients_year0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      clients_year1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 2, @bs_scale)
      clients_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 2, @bs_scale))

      value = Company.calculate_customer_variation clients_year1, clients_year0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN CLIENTES

      #####====== VARIACIÓN INVENTARIOS
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        inventory_year1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 3, @bs_scale)
        inventory_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 3, @bs_scale))

        value = Company.calculate_inventory_variance inventory_year1, inventory_year0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_inventarios').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      inventory_year1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 3, @bs_scale)
      inventory_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 3, @bs_scale))

      value = Company.calculate_inventory_variance inventory_year1, inventory_year0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_inventarios').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN INVENTARIOS

      #####====== VARIACIÓN PROVEEDORES
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        supplier_year1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 10, @bs_scale)
        supplier_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 10, @bs_scale))

        value = Company.calculate_supplier_variation supplier_year1, supplier_year0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      supplier_year1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 10, @bs_scale)
      supplier_year0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 10, @bs_scale))

      value = Company.calculate_supplier_variation supplier_year1, supplier_year0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN PROVEEDORES

      #####====== VARIACIÓN ANTICIPO CLIENTES
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        advance_customers1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 12, @bs_scale)
        advance_customers0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 12, @bs_scale))

        value = Company.calculate_advance_customers advance_customers1, advance_customers0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_anticipo_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      advance_customers1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 12, @bs_scale)
      advance_customers0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 12, @bs_scale))

      value = Company.calculate_advance_customers advance_customers1, advance_customers0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_anticipo_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN ANTICIPO CLIENTES

      #####====== FLUJO DE OPERACIÓN
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        gross_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_bruto').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        customer_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        inventory_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_inventarios').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        supplier_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        customer_advance_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_anticipo_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)

        value = Company.calculate_operation_flow gross_flow, customer_variation, inventory_variation, supplier_variation, customer_advance_variation
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_operacion').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      gross_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_bruto').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      customer_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      inventory_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_inventarios').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      supplier_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_proveedores').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      customer_advance_variation = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_anticipo_clientes').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)

      value = Company.calculate_operation_flow gross_flow, customer_variation, inventory_variation, supplier_variation, customer_advance_variation
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_operacion').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN FLUJO DE OPERACIÓN

      #####====== IMPUESTOS PAGADOS Y PTU
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        isr_value = Company.convert_value_to_miles @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 11, @ins_scale)
        ptu_value = Company.convert_value_to_miles @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 12, @ins_scale)
        contributions_payable = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 11, @bs_scale)

        value = Company.calculate_paid_taxes_ptu isr_value, ptu_value, contributions_payable
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'impuestos_pagados_ptu').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      isr_value = Company.convert_value_to_miles @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 11, @ins_scale)
      ptu_value = Company.convert_value_to_miles @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 12, @ins_scale)
      contributions_payable = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 11, @bs_scale)

      value = Company.calculate_paid_taxes_ptu isr_value, ptu_value, contributions_payable
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'impuestos_pagados_ptu').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN IMPUESTOS PAGADOS Y PTU

      #####====== GASTOS FINANCIEROS
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        financial_expense = Company.convert_value_to_miles @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 7, @ins_scale)

        value = -(financial_expense)
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'gastos_financieros').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      financial_expense = Company.convert_value_to_miles @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 7, @ins_scale)

      value = -(financial_expense)
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'gastos_financieros').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN GASTOS FINANCIEROS

      #####====== FLUJO NETO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        operation_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_operacion').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        paid_taxes_ptu = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'impuestos_pagados_ptu').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        financial_expense = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'gastos_financieros').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)

        value = Company.calculate_net_flow operation_flow, paid_taxes_ptu, financial_expense
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      operation_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_operacion').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      paid_taxes_ptu = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'impuestos_pagados_ptu').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      financial_expense = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'gastos_financieros').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)

      value = Company.calculate_net_flow operation_flow, paid_taxes_ptu, financial_expense
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN FLUJO NETO

      #####====== VARIACIÓN EN ACTIVO FIJO
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        land_buildings_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 5, @bs_scale)
        machinery_equipment_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 6, @bs_scale)
        other_fixed_assets_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 8, @bs_scale)

        land_buildings_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 5, @bs_scale))
        machinery_equipment_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 6, @bs_scale))
        other_fixed_assets_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 8, @bs_scale))

        accumulated_depreciation = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 7, @bs_scale)

        value = Company.calculate_variation_fixed_assets land_buildings_1, machinery_equipment_1, other_fixed_assets_1, land_buildings_0, machinery_equipment_0, other_fixed_assets_0, accumulated_depreciation
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_activo_fijo').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      land_buildings_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 5, @bs_scale)
      machinery_equipment_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 6, @bs_scale)
      other_fixed_assets_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 8, @bs_scale)

      land_buildings_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 5, @bs_scale))
      machinery_equipment_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 6, @bs_scale))
      other_fixed_assets_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 8, @bs_scale))

      accumulated_depreciation = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 7, @bs_scale)

      value = Company.calculate_variation_fixed_assets land_buildings_1, machinery_equipment_1, other_fixed_assets_1, land_buildings_0, machinery_equipment_0, other_fixed_assets_0, accumulated_depreciation
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_activo_fijo').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN EN ACTIVO FIJO

      #####====== VARIACIÓN OTROS ACTIVOS
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        other_current_assets_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 4, @bs_scale)
        other_current_assets_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 4, @bs_scale))
        charges_and_expenses_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 9, @bs_scale)
        charges_and_expenses_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 9, @bs_scale))

        value = Company.calculate_variation_other_assets other_current_assets_1, other_current_assets_0, charges_and_expenses_1, charges_and_expenses_0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      other_current_assets_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 4, @bs_scale)
      other_current_assets_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 4, @bs_scale))
      charges_and_expenses_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 9, @bs_scale)
      charges_and_expenses_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 9, @bs_scale))

      value = Company.calculate_variation_other_assets other_current_assets_1, other_current_assets_0, charges_and_expenses_1, charges_and_expenses_0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN OTROS ACTIVOS

      #####====== VARIACIÓN OTROS PASIVOS
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        other_passives_1 = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 13, @bs_scale)
        other_passives_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : company_balance_sheet_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 13, @bs_scale))

        value = Company.calculate_variation_other_liabilities other_passives_1, other_passives_0
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_pasivos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      other_passives_1 = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 13, @bs_scale)
      other_passives_0 = Company.convert_value_to_miles @bs_scale, (calendar_index - 1 < 0 ? 0 : balance_calendar_detail_value(@company.id, @calendar_fr[calendar_index - 1].calendar, 13, @bs_scale))

      value = Company.calculate_variation_other_liabilities other_passives_1, other_passives_0
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_pasivos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN VARIACIÓN OTROS PASIVOS

      #####====== AUMENTO/DISMINUCIÓN EN CAJA
      #CALCULO CON VALORES DEL SAT
      if calendar.calendar.period_type == 'anual'
        net_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        var_fixed_assets = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_activo_fijo').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        var_other_assets = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)
        var_other_liabilities = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_pasivos').try(:id), calendar_id: calendar.calendar.id, capture_type: 1).try(:value)

        value = Company.calculate_cash_increase_decrease net_flow, var_fixed_assets, var_other_assets, var_other_liabilities
        CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'aumento_disminucion_caja').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
      end

      #CALCULO CON VALORES DE CAPTURA
      net_flow = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      var_fixed_assets = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_activo_fijo').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      var_other_assets = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_activos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)
      var_other_liabilities = CompanyFlow.find_by(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'variacion_otros_pasivos').try(:id), calendar_id: calendar.calendar.id, capture_type: 2).try(:value)

      value = Company.calculate_cash_increase_decrease net_flow, var_fixed_assets, var_other_assets, var_other_liabilities
      CompanyFlow.create(company_id: @company.id, flow_concept_id: FlowConcept.find_by(key: 'aumento_disminucion_caja').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
      #####====== FIN AUMENTO/DISMINUCIÓN EN CAJA
    end

    respond_to do |format|
      if true
        format.html { redirect_to "/company_details/#{@company.id}", notice: "Flujo de efectivo generado exitosamente." }
      else
        #format.json { render json: company.errors, status: :unprocessable_entity }
      end
    end
  end

  def save_extra_data
    sort_order = %w(anual trimestral mensual)
    #data_flow   = params[:data_flow]
    data_conc = params[:data_conc]
    data_bs = params[:data_bs]
    data_is = params[:data_is]

    calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    reasons_scale = 'miles'

    begin
=begin
      CompanyFlow.transaction do
        data_flow.each do |e|
          company_flow = CompanyFlow.find_by(flow_concept_id: e[1][:concept_id], calendar_id: e[1][:period], company_id: @company.id)
          if company_flow.present?
            raise ActiveRecord::Rollback unless company_flow.update(value: e[1][:value].present? ? e[1][:value] : 0, value_scale: reasons_scale)
          else
            raise ActiveRecord::Rollback unless CompanyFlow.new(flow_concept_id: e[1][:concept_id], calendar_id: e[1][:period], value:  e[1][:value].present? ? e[1][:value] : 0, company_id: @company.id, value_scale: reasons_scale).save
          end
        end
      end
=end

      CompanyConciliation.transaction do
        data_conc.each do |e|
          company_conciliation = CompanyConciliation.find_by(conciliation_concept_id: e[1][:concept_id], calendar_id: e[1][:period], company_id: @company.id)
          if company_conciliation.present?
            raise ActiveRecord::Rollback unless company_conciliation.update(value: e[1][:value].present? ? e[1][:value] : 0, value_scale: reasons_scale)
          else
            raise ActiveRecord::Rollback unless CompanyConciliation.new(conciliation_concept_id: e[1][:concept_id], calendar_id: e[1][:period], value: e[1][:value].present? ? e[1][:value] : 0, company_id: @company.id, value_scale: reasons_scale).save
          end
        end
      end

      BalanceCalendarDetail.transaction do
        data_bs.each do |e|
          bs_detail = BalanceCalendarDetail.find_by(balance_concept_id: e[1][:concept_id], calendar_id: e[1][:period], company_id: @company.id, extra_data: true)
          if bs_detail.present?
            raise ActiveRecord::Rollback unless bs_detail.update(value: e[1][:value].present? ? e[1][:value] : 0, value_scale: bs_scale)
          else
            raise ActiveRecord::Rollback unless BalanceCalendarDetail.new(balance_concept_id: e[1][:concept_id], calendar_id: e[1][:period], value: e[1][:value].present? ? e[1][:value] : 0, balance_type: 'FACTOR', company_id: @company.id, value_scale: bs_scale, extra_data: true).save
          end
        end
      end

      IncomeCalendarDetail.transaction do
        data_is.each do |e|
          ic_detail = IncomeCalendarDetail.find_by(income_statement_concept_id: e[1][:concept_id], calendar_id: e[1][:period], company_id: @company.id, extra_data: true)
          if ic_detail.present?
            raise ActiveRecord::Rollback unless ic_detail.update(value: e[1][:value], value_scale: ins_scale)
          else
            raise ActiveRecord::Rollback unless IncomeCalendarDetail.new(income_statement_concept_id: e[1][:concept_id], calendar_id: e[1][:period], value: e[1][:value], company_id: @company.id, value_scale: ins_scale, extra_data: true).save
          end
        end
      end

      #SE ELIMINAN REGISTROS PARA RESTABLECER CON NUEVOS VALORES.
      delete_ids_array = ['crecimiento_sostenible', 'cobertura_de_deuda', 'deuda_financiera_lp', 'deuda_financiera_total', 'total_pasivo_financiero', 'razon_circulante', 'prueba_del_acido', 'flujo_total_pas_fin', 'flujo_total_pas_total']
      FReasonsCompany.where(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.where(key: delete_ids_array).pluck(:id)).destroy_all

      #Calculo de razónes
      calendar_fr.each_with_index do |calendar, calendar_index|
        # capture_type = 1 (VALORES OBTENIDOS DEL SAT)
        # capture_type = 2 (VALORES OBTENIDOS DE CAPTURA)

        months = Company.calculate_months calendar.calendar.period_type

        #####====== CRECIMIENTO SOSTENIBLE
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          net_margin = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 1, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_neto').try(:id)).first.try(:value)
          pas_tot_cap_cont = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 1, f_reasons_concept_id: FReasonsConcept.find_by(key: 'pas_total_cap_contable').try(:id)).first.try(:value)
          asset_turnover = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 1, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id)).first.try(:value)
          dividends_paid_in_cash = Company.convert_value_to_miles reasons_scale, CompanyConciliation.where(calendar_id: calendar.calendar.id, conciliation_concept_id: ConciliationConcept.find_by(key: 'dividendos_pagados_efectivo').try(:id), company_id: @company.id).first.try(:value)
          net_profit = Company.convert_value_to_miles ins_scale, company_income_stat_value(@company.id, calendar.calendar, 14, ins_scale)

          value = Company.calculate_crecimiento_sostenible net_margin, pas_tot_cap_cont, asset_turnover, dividends_paid_in_cash, net_profit
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_sostenible').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value.round(1))
        end

        #CALCULO CON VALORES DE CAPTURA
        net_margin = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 2, f_reasons_concept_id: FReasonsConcept.find_by(key: 'margen_neto').try(:id)).first.try(:value)
        pas_tot_cap_cont = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 2, f_reasons_concept_id: FReasonsConcept.find_by(key: 'pas_total_cap_contable').try(:id)).first.try(:value)
        asset_turnover = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 2, f_reasons_concept_id: FReasonsConcept.find_by(key: 'rotacion_de_activos').try(:id)).first.try(:value)
        dividends_paid_in_cash = Company.convert_value_to_miles reasons_scale, CompanyConciliation.where(calendar_id: calendar.calendar.id, conciliation_concept_id: ConciliationConcept.find_by(key: 'dividendos_pagados_efectivo').try(:id), company_id: @company.id).first.try(:value)
        net_profit = Company.convert_value_to_miles ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 14, ins_scale)

        #Los valores se convierten a MILES para calcular las razones.
        value = Company.calculate_crecimiento_sostenible net_margin, pas_tot_cap_cont, asset_turnover, dividends_paid_in_cash, net_profit
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'crecimiento_sostenible').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value.round(1))
        #####====== FIN CRECIMIENTO SOSTENIBLE

        #####====== RAZÓN CIRCULANTE
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          activo_circulante = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['1', '2', '3', '4'], bs_scale)
          providers = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 10, bs_scale)
          contributions_payable = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 11, bs_scale)
          advance_customers = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 12, bs_scale)
          banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
          other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
          principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
          other_pas_circ = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)

          value = Company.calculate_razon_circulante activo_circulante, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'razon_circulante').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        activo_circulante = Company.convert_value_to_miles bs_scale, bs_capture_sum(@company.id, ['1', '2', '3', '4'], calendar.calendar.id, bs_scale)
        providers = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 10, bs_scale)
        contributions_payable = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 11, bs_scale)
        advance_customers = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 12, bs_scale)
        banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
        other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
        principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
        other_pas_circ = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_circulante').try(:id), company_id: @company.id).first.try(:value)

        value = Company.calculate_razon_circulante activo_circulante, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'razon_circulante').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN RAZÓN CIRCULANTE

        #####====== PRUEBA DEL ACIDO
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          activo_circulante = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['1', '2', '3', '4'], bs_scale)
          inventarios = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 3, bs_scale)
          providers = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 10, bs_scale)
          contributions_payable = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 11, bs_scale)
          advance_customers = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 12, bs_scale)
          banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
          other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
          principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
          other_pas_circ = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)

          value = Company.calculate_prueba_acido activo_circulante, inventarios, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'prueba_del_acido').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        activo_circulante = Company.convert_value_to_miles bs_scale, bs_capture_sum(@company.id, ['1', '2', '3', '4'], calendar.calendar.id, bs_scale)
        inventarios = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 3, bs_scale)
        providers = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 10, bs_scale)
        contributions_payable = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 11, bs_scale)
        advance_customers = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 12, bs_scale)
        banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
        other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
        principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
        other_pas_circ = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_circulante').try(:id), company_id: @company.id).first.try(:value)

        value = Company.calculate_prueba_acido activo_circulante, inventarios, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'prueba_del_acido').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN PRUEBA DEL ACIDO

        #####====== TOTAL PASIVO FINANCIERO
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == 'anual'
          banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
          other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
          principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
          banks_lt = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), company_id: @company.id).first.try(:value)
          other_pas_lp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_lp').try(:id), company_id: @company.id).first.try(:value)

          value = Company.calculate_total_pas_fin banks_st, other_pas_cp, principal_payment, banks_lt, other_pas_lp
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'total_pasivo_financiero').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value.round(1))
        end

        #CALCULO CON VALORES DE CAPTURA
        banks_st = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), company_id: @company.id).first.try(:value)
        other_pas_cp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_fin_cp').try(:id), company_id: @company.id).first.try(:value)
        principal_payment = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
        banks_lt = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), company_id: @company.id).first.try(:value)
        other_pas_lp = Company.convert_value_to_miles reasons_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'otros_pasivos_lp').try(:id), company_id: @company.id).first.try(:value)

        #Los valores se convierten a MILES para calcular las razones.
        value = Company.calculate_total_pas_fin banks_st, other_pas_cp, principal_payment, banks_lt, other_pas_lp
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'total_pasivo_financiero').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value.round(1))
        #####====== FIN TOTAL PASIVO FINANCIERO

        #####====== COBERTURA DE DEUDA
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == "anual"
          utility_op = Company.convert_value_to_miles ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, ins_scale)
          principal_payment = Company.convert_value_to_miles bs_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
          financial_expense = Company.convert_value_to_miles ins_scale, company_income_stat_value(@company.id, calendar.calendar, 7, ins_scale)
          value = Company.calculate_interest_coverage utility_op, principal_payment, financial_expense
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'cobertura_de_deuda').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        utility_op = Company.convert_value_to_miles ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, ins_scale)
        principal_payment = Company.convert_value_to_miles bs_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'pago_de_capital').try(:id), company_id: @company.id).first.try(:value)
        financial_expense = Company.convert_value_to_miles ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 7, ins_scale)
        value = Company.calculate_interest_coverage utility_op, principal_payment, financial_expense
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'cobertura_de_deuda').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN COBERTURA DE DEUDA

        #####====== FLUJO NETO / TOTAL PASIVO FINANCIERO
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == "anual"
          net_flow = Company.convert_value_to_miles reasons_scale, CompanyFlow.where(calendar_id: calendar.calendar.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), company_id: @company.id).first.try(:value)
          pas_fin_total = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 1, f_reasons_concept_id: FReasonsConcept.find_by(key: 'total_pasivo_financiero').try(:id)).first.try(:value)

          value = Company.calculate_flujo_neto_pas_fin net_flow, pas_fin_total
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'flujo_total_pas_fin').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        net_flow = Company.convert_value_to_miles reasons_scale, CompanyFlow.where(calendar_id: calendar.calendar.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), company_id: @company.id).first.try(:value)
        pas_fin_total = FReasonsCompany.where(calendar_id: calendar.calendar.id, capture_type: 2, f_reasons_concept_id: FReasonsConcept.find_by(key: 'total_pasivo_financiero').try(:id)).first.try(:value)

        value = Company.calculate_flujo_neto_pas_fin net_flow, pas_fin_total
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'flujo_total_pas_fin').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN FLUJO NETO / TOTAL PASIVO FINANCIERO

        #####====== FLUJO NETO / PASIVO TOTAL
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == "anual"
          net_flow = Company.convert_value_to_miles reasons_scale, CompanyFlow.where(calendar_id: calendar.calendar.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), company_id: @company.id).first.try(:value)
          pas_total = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, ['10', '11', '12', '13'], bs_scale)

          value = Company.calculate_flujo_neto_pas_fin net_flow, pas_total
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'flujo_total_pas_total').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        net_flow = Company.convert_value_to_miles reasons_scale, CompanyFlow.where(calendar_id: calendar.calendar.id, flow_concept_id: FlowConcept.find_by(key: 'flujo_neto').try(:id), company_id: @company.id).first.try(:value)
        pas_total = Company.convert_value_to_miles bs_scale, bs_capture_sum(@company.id, ['10', '11', '12', '13'], calendar.calendar.id, bs_scale)

        value = Company.calculate_flujo_neto_pas_fin net_flow, pas_total
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'flujo_total_pas_total').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN FLUJO NETO / PASIVO TOTAL

        #####====== DEUDA FINANCIERA LP / UAFIRDA
        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == "anual"
          banks_lt = Company.convert_value_to_miles bs_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), company_id: @company.id).first.try(:value)
          other_passives = Company.convert_value_to_miles bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 13, bs_scale)
          dep_and_amort = Company.convert_value_to_miles ins_scale, IncomeCalendarDetail.where(calendar_id: calendar.calendar.id, income_statement_concept_id: IncomeStatementConcept.find_by(key: 'bancos_lp').try(:id), company_id: @company.id).first.try(:value)
          utility_operation = Company.convert_value_to_miles ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, ins_scale)

          value = Company.calculate_finantial_lp banks_lt, other_passives, dep_and_amort, utility_operation, months
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'deuda_financiera_lp').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        banks_lt = Company.convert_value_to_miles bs_scale, BalanceCalendarDetail.where(calendar_id: calendar.calendar.id, balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), company_id: @company.id).first.try(:value)
        other_passives = Company.convert_value_to_miles bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 13, @bs_scale)
        dep_and_amort = Company.convert_value_to_miles ins_scale, IncomeCalendarDetail.where(calendar_id: calendar.calendar.id, income_statement_concept_id: IncomeStatementConcept.find_by(key: 'dep_and_amort').try(:id), company_id: @company.id).first.try(:value)
        utility_operation = Company.convert_value_to_miles ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, @ins_scale)

        value = Company.calculate_finantial_lp banks_lt, other_passives, dep_and_amort, utility_operation, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'deuda_financiera_lp').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN DEUDA FINANCIERA LP / UAFIRDA

        #####====== DEUDA FINANCIERA TOTAL / UAFIRDA ======= PENDIENTE

        #CALCULO CON VALORES DEL SAT
        if calendar.calendar.period_type == "anual"
          other_pas = Company.convert_value_to_miles @bs_scale, company_balance_sheet_value(@company.id, calendar.calendar, 13, @bs_scale)
          utility_op = Company.convert_value_to_miles @ins_scale, company_income_stat_value(@company.id, calendar.calendar, 5, @ins_scale)
          dep_y_amort = Company.convert_value_to_miles @ins_scale, IncomeCalendarDetail.where(income_statement_concept_id: IncomeStatementConcept.find_by(key: 'dep_and_amort').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)

          banks_lt = Company.convert_value_to_miles @bs_scale, BalanceCalendarDetail.where(balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)
          banks_st = Company.convert_value_to_miles @bs_scale, BalanceCalendarDetail.where(balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)

          value = Company.calculate_finantial_total utility_op, dep_y_amort, banks_st, banks_lt, other_pas, months
          FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'deuda_financiera_total').try(:id), calendar_id: calendar.calendar.id, capture_type: 1, value: value)
        end
        #CALCULO CON VALORES DE CAPTURA
        other_pas = Company.convert_value_to_miles @bs_scale, balance_calendar_detail_value(@company.id, calendar.calendar, 13, @bs_scale)
        utility_op = Company.convert_value_to_miles @ins_scale, income_calendar_detail_value(@company.id, calendar.calendar, 5, @ins_scale)
        dep_y_amort = Company.convert_value_to_miles @ins_scale, IncomeCalendarDetail.where(income_statement_concept_id: IncomeStatementConcept.find_by(key: 'dep_and_amort').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)

        banks_lt = Company.convert_value_to_miles @bs_scale, BalanceCalendarDetail.where(balance_concept_id: BalanceConcept.find_by(key: 'bancos_lp').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)
        banks_st = Company.convert_value_to_miles @bs_scale, BalanceCalendarDetail.where(balance_concept_id: BalanceConcept.find_by(key: 'bancos_cp').try(:id), calendar_id: calendar.calendar.id, company_id: @company.id).first.try(:value)

        value = Company.calculate_finantial_total utility_op, dep_y_amort, banks_st, banks_lt, other_pas, months
        FReasonsCompany.create(company_id: @company.id, f_reasons_concept_id: FReasonsConcept.find_by(key: 'deuda_financiera_total').try(:id), calendar_id: calendar.calendar.id, capture_type: 2, value: value)
        #####====== FIN DEUDA FINANCIERA TOTAL / UAFIRDA
      end

      redirect_to "/company_details/#{@company.id}", notice: "Datos guardados."
    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def comments
    @company = Company.find(params[:company_id])
    @comments = Comment.where(company_id: params[:company_id], assigned_to: params[:assigned_to])
    @comment_type = params[:assigned_to]

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end

  end

  def save_comment
    comment_params = params[:comment]
    comment = Comment.new(comment: comment_params[:comment], user_id: current_user.id, assigned_to: comment_params[:assigned_to], company_id: comment_params[:company_id])

    respond_to do |format|
      if comment.save
        format.html { redirect_to "/comments/#{comment_params[:company_id]}/#{comment_params[:assigned_to]}", notice: "Comentario guardado exitosamente." }
        format.js
      else
        format.html { render "/comments/#{comment_params[:company_id]}/#{comment_params[:assigned_to]}", status: :unprocessable_entity }
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

  def open_pdf
    @pdf = Base64.decode64(params[:file])

    case params[:file]
    when 'id_file'
      file_name = "Identificacion_Oficial_#{@company.id}.pdf"
    when 'constancy_file'
      file_name = "Constancia_De_Situacion_Fiscal_#{@company.id}.pdf"
    when "financial_statements_one_file"
      file_name = "Estados_Financieros_Cierre_anual_1_#{@company.id}.pdf"
    when "financial_statements_two_file"
      file_name = "Estados_Financieros_Cierre_anual_2_#{@company.id}.pdf"
    when "financial_statements_parcial_file"
      file_name = "Estados_Financieros_Cierre_parcial_#{@company.id}.pdf"
    end

    send_data(@pdf, :type => 'application/pdf', :filename => file_name, :disposition => "inline")
  end

  ##===================CODIGO TENTATIVO A ELIMINAR##
  def company_balance_sheet
    @company_bs = CompanyBalanceSheet.where(company_id: params[:id])
    @years = @company_bs.pluck(:year).uniq.sort
  end

  def company_income_statement
  end

  ##CODIGO TENTATIVO A ELIMINAR====================##

  def process_date

    if company_params['financial_institutions_attributes'].present?
      company_params['financial_institutions_attributes'].each do |financial|

        if financial[1]['expiration'].present?
          date_parts = financial[1]['expiration'].split('/')
          # swap date and month
          date_parts[0], date_parts[1] = date_parts[1], date_parts[0]
          new_date = date_parts.join('/')

          params['company']['financial_institutions_attributes'][financial[0]]['expiration'] = new_date.to_date
        end

      end
    end
  end

  def get_payments_frecuency payment

    if payment == 'M'
      response = 'Pagos fijos'
    elsif payment == 'Z'
      response = 'Pago minimo'
    end

    return response

  end

  def method_payment payment
    if payment == '01'
      reponse = 'Cuenta al corriente'
    elsif payment == '02'
      reponse = 'Atraso de 1 a 89 días'

    else
      reponse = 'Atraso mayor a 90 días o deuda sin recuperar'
    end

    return reponse

  end

  def sat_info_company
    @company = Company.find(params[:id])
    @info = SatW.get_tax_status @company.try(:rfc)
    respond_to do |format|
      if @company.update(info_company: @info)
        format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
      else
        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
      end
    end
  end

  def sat_income_statement
    @company = Company.find(params[:id])

    @income_statment = SatW.get_income_statment @company.try(:rfc)
    respond_to do |format|
      if @company.update(income_statment: @income_statment)
        format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
      else
        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
      end
    end
  end

  def sat_balance_sheet
    @company = Company.find(params[:id])

    @balance_sheet = SatW.get_balance_sheet @company.try(:rfc)

    respond_to do |format|
      if @company.update(balance_sheet: @balance_sheet)
        format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
      else
        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
      end
    end
  end

  def credit_bureau_info
    @company = Company.find(params[:id])

    @bureau_info = BuroCredito.get_buro_info @company.try(:credit_bureaus).last.try(:bureau_id)

    respond_to do |format|
      if @company.try(:credit_bureaus).last.update(bureau_info: @bureau_info)
        format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
      else
        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
      end
    end
  end

  def credit_bureau_report
    @company = Company.find(params[:id])

    @bureau_report = BuroCredito.get_buro_report @company.try(:buro_id), @company.try(:info_company)

    respond_to do |format|
      if @company.try(:credit_bureaus).last.present?
        if @company.try(:credit_bureaus).last.update(bureau_report: @bureau_report)
          format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
        else
          format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
        end
      else
        if CreditBureau.create(company_id: @company.id, bureau_report: @bureau_report, bureau_id: @company.try(:buro_id))
          format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
        else
          format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
        end
      end
    end
  end

  def credit_bureau_pdf
    respond_to do |format|
      # format.html
      # format.pdf { render  template: "companies/credit_bureau", pdf: "Reporte Buró de Crédito", type: "application/pdf" }   # Excluding ".pdf" extension.
      format.pdf do
        render pdf: "Reporte Buró de Crédito",
               template: "companies/credit_bureau.html.slim",
               type: "application/pdf",
               disposition: "inline"
      end
    end
  end

  def dictamen_report
    sort_order = %w(anual trimestral mensual)
    @periods = Calendar.all.order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.period_type) }
    @calendar_periods_bs = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_periods_is = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'income_statement').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @request = Request.find_by(company_id: params[:id])
    @request_comments = RequestComment.where(request_id: params[:request_id])
    @bs_comments = Comment.where(company_id: @company.id, assigned_to: 'balance_sheet').order(:created_at)
    @is_comments = Comment.where(company_id: @company.id, assigned_to: 'income_statement').order(:created_at)
    @fr_comments = Comment.where(company_id: @company.id, assigned_to: 'financial_reasons').order(:created_at)
    @cb_comments = Comment.where(company_id: @company.id, assigned_to: 'credit_bureau').order(:created_at)
    @cf_comments = Comment.where(company_id: @company.id, assigned_to: 'cash_flow').order(:created_at)
    @financial_inst = @company.financial_institutions
    @bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @requests = Request.where(company_id: params[:id])

    if @company.cash_flow.present?
      @cash_flow = @company.cash_flow.group_by { |c| [c['date']] }
    else
      @cash_flow = []
    end

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end

    credit_bureaus = @company.try(:credit_bureaus).try(:last)

    if credit_bureaus.present? #@company.credit_bureaus.present?
      if credit_bureaus.bureau_report['results'].present?
        if credit_bureaus.bureau_report['results'][0]['response'].present?
          @report_result = credit_bureaus.bureau_report['results'][0]
        else
          @report_result = credit_bureaus.bureau_report['results'][1]
        end
      else
        @report_result = credit_bureaus.bureau_report
      end

      @credit_bureau = credit_bureaus

      if @company.try(:client_type) == 'PF'
        if @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito'].present?
          @score = @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito']['ScoreBC'][0]['ValorScore'].to_i
        else
          @score = 0
        end
      end

    end

    respond_to do |format|
      format.html
      # format.pdf { render  template: "companies/credit_bureau", pdf: "Reporte Buró de Crédito", type: "application/pdf" }   # Excluding ".pdf" extension.
      format.pdf do
        render pdf: "Dictámen",
               template: "companies/dictamen_report.html.slim",
               type: "application/pdf",
               disposition: "inline",
               encoding: 'UTF-8',
               dpi: '300'
      end
    end

  end

  def bureau_report
    sort_order = %w(anual trimestral mensual)
    @periods = Calendar.all.order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.period_type) }
    @calendar_periods_bs = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_periods_is = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'income_statement').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_fr = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(year: :asc, period: :desc).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }

    @bs_comments = Comment.where(company_id: @company.id, assigned_to: 'balance_sheet').order(:created_at)
    @is_comments = Comment.where(company_id: @company.id, assigned_to: 'income_statement').order(:created_at)
    @fr_comments = Comment.where(company_id: @company.id, assigned_to: 'financial_reasons').order(:created_at)
    @cb_comments = Comment.where(company_id: @company.id, assigned_to: 'credit_bureau').order(:created_at)
    @cf_comments = Comment.where(company_id: @company.id, assigned_to: 'cash_flow').order(:created_at)
    @financial_inst = @company.financial_institutions
    @bs_scale = BalanceCalendarDetail.find_by(company_id: @company.id).try(:value_scale)
    @ins_scale = IncomeCalendarDetail.find_by(company_id: @company.id).try(:value_scale)

    if @company.cash_flow.present?
      @cash_flow = @company.cash_flow.group_by { |c| [c['date']] }
    else
      @cash_flow = []
    end

    if @company.try(:info_company).present?
      if @company.try(:info_company)['hydra:member'].present?
        if @company.try(:info_company)['hydra:member'][0]['company'].present?
          if @company.try(:info_company)['hydra:member'][0]['company']['tradeName'].present?
            @company_name = @company.try(:info_company)['hydra:member'][0]['company']['tradeName']
          else
            @company_name = @company.try(:info_company)['hydra:member'][0]['company']['legalName']
          end
        else
          @company_name = @company.try(:name)
        end
        if @company.try(:info_company)['hydra:member'][0]['address'].present?
          @company_address = @company.try(:info_company)['hydra:member'][0]['address']['streetName'] +
            @company.try(:info_company)['hydra:member'][0]['address']['streetNumber'] + ', COL. ' + @company.try(:info_company)['hydra:member'][0]['address']['neighborhood']
          @company_state_municipality = @company.try(:info_company)['hydra:member'][0]['address']['state'] + ' / ' +
            @company.try(:info_company)['hydra:member'][0]['address']['municipality']
        else
          @company_address = @company.try(:address)
        end
      else
        @company_name = @company.try(:name)
      end
    else
      @company_name = @company.try(:name)
    end

    credit_bureaus = @company.try(:credit_bureaus).try(:last)

    if credit_bureaus.present? #@company.credit_bureaus.present?
      if credit_bureaus.bureau_report['results'].present?
        if credit_bureaus.bureau_report['results'][0]['response'].present?
          @report_result = credit_bureaus.bureau_report['results'][0]
        else
          @report_result = credit_bureaus.bureau_report['results'][1]
        end
      else
        @report_result = credit_bureaus.bureau_report
      end

      @credit_bureau = credit_bureaus

      if @company.try(:client_type) == 'PF'
        if @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito'].present?
          @score = @report_result['response']['return']['Personas']['Persona'][0]['ScoreBuroCredito']['ScoreBC'][0]['ValorScore'].to_i
        else
          @score = 0
        end
      end

    end

    respond_to do |format|
      format.html
      # format.pdf { render  template: "companies/credit_bureau", pdf: "Reporte Buró de Crédito", type: "application/pdf" }   # Excluding ".pdf" extension.
      format.pdf do
        render pdf: "Buro",
               template: "companies/bureau_report.html.slim",
               type: "application/pdf",
               disposition: "inline",
               encoding: 'UTF-8',
               dpi: '300'
      end
    end

  end

  def send_buro_confirm_code
    user = current_user
    company = current_user.company
    date_now = DateTime.now

    begin
      code = SecureRandom.random_number(10 ** 4).to_s.rjust(4, '1')
      ##code_sended = Company.send_buro_code(params[:phone], code)
      #CreditRequestMailer.with(email: 'javiert7ro@gmail.com', code: code).confirmation_code.deliver_now

      #if code_sended
      if company.forwarded_code == nil
        CreditRequestMailer.with(email: user.try(:email), code: code).confirmation_code.deliver_now
        company.update(buro_confirmation_code: code, bufo_confirmation_date: date_now, forwarded_code: false)
      elsif company.forwarded_code == false
        CreditRequestMailer.with(email: user.try(:email), code: code).confirmation_code.deliver_now
        company.update(buro_confirmation_code: code, bufo_confirmation_date: date_now, forwarded_code: true)
      elsif company.forwarded_code and company.bufo_confirmation_date.before?(1.day.ago)
        CreditRequestMailer.with(email: user.try(:email), code: code).confirmation_code.deliver_now
        company.update(buro_confirmation_code: code, bufo_confirmation_date: date_now)
      else
        render json: { message: 'Something went wrong, try later' }, status: 401
        return
      end
      #end

      render json: { message: 'Code sended sucesfully' }, status: 200
    rescue => e
      render json: { message: 'Something went wrong' }, status: 400
    end
  end

  def create_buro info_sat, user_phone = nil

    rfc = info_sat['hydra:member'][0]['rfc']
    address = info_sat['hydra:member'][0]['address']['streetName']
    city = info_sat['hydra:member'][0]['address']['locality']
    state = get_state info_sat['hydra:member'][0]['address']['state']
    zip_code = info_sat['hydra:member'][0]['address']['postalCode']
    interior_number = info_sat['hydra:member'][0]['address']['buildingNumber']
    exterior_number = info_sat['hydra:member'][0]['address']['streetNumber']
    municipality = info_sat['hydra:member'][0]['address']['municipality']
    neighborhood = info_sat['hydra:member'][0]['address']['neighborhood']

    #PF
    # rfc = "HEMG4812162Q2"
    # address = "CLL SA CATARINA"
    # city = "CHIHUAHUA"
    # state = "CHI"
    # zip_code = "31215"
    # interior_number = ""
    # exterior_number = "3206"
    # municipality = "CHIHUAHUA"
    # neighborhood = ""
    # account_type = "PF"
    # first_name = "GUSTAVO"
    # first_last_name = "HERNANDEZ"
    # second_last_name = 'MONROY'

    #PM
    # rfc = "GLO0605033G2"
    # basic_rfc = "GLO060503"
    # address = "REPUBLICA DE CUBA"
    # city = "CHIHUAHUA"
    # state = "CHI"
    # zip_code = "31210"
    # interior_number = ""
    # exterior_number = "806"
    # municipality = "CHIHUAHUA"
    # neighborhood = "PANAMERICANA"
    # account_type = "PM"
    # trade_name="GRUPO LOPIC SA DE CV"

    #PFAE
    # rfc = "COPS611102S83"
    # basic_rfc = "COPS611102"
    # address = "IGNACIO LOPEZ RAYON"
    # city = "CIUDAD CUAUHTEMOC"
    # state = "CHI"
    # zip_code = "31530"
    # interior_number = ""
    # exterior_number = "1925"
    # municipality = "CUAUHTEMOC"
    # neighborhood = "CIUDAD CUAUHTEMOC"
    # account_type = "PF"
    # trade_name="SALVADOR CORRAL PEREZ"

    if info_sat['hydra:member'][0]['company'].present?
      account_type = "PM"
      trade_name = info_sat['hydra:member'][0]['company']['legalName']
      basic_rfc = rfc.first(9)

      data = [accountType: account_type, tradeName: trade_name, rfc: rfc, basicRFC: basic_rfc, address: address,
              city: city, state: state, zipCode: zip_code, exteriorNumber: exterior_number,
              interiorNumber: interior_number, neighborhood: neighborhood, municipality: municipality, nationality: "MX",
              country: "MX"]
    else
      first_name = info_sat['hydra:member'][0]['person']['firstName']
      first_last_name = info_sat['hydra:member'][0]['person']['middleName']
      second_last_name = info_sat['hydra:member'][0]['person']['lastName']
      account_type = "PF"
      data = [accountType: account_type, firstName: first_name, middleName: "", rfc: rfc, firstLastName: first_last_name,
              secondLastName: second_last_name, address: address, city: city, state: state, zipCode: zip_code,
              exteriorNumber: exterior_number, interiorNumber: interior_number, neighborhood: neighborhood,
              municipality: municipality, nationality: "MX", phone: user_phone]
    end

    @buro = BuroCredito.create_client data

    if @buro['result'].present?
      response = @buro['result']
    else
      response = false

    end

    return response
  end

  def get_state state
    if state == 'Aguascalientes' || state == 'aguascalientes' || state == 'AGUASCALIENTES'
      new_state = 'AGS'
    elsif state == 'Baja California Norte' || state == 'baja california norte' || state == 'BAJA CALIFORNIA NORTE'
      new_state = 'BCN'
    elsif state == 'Baja California Sur' || state == 'baja california sur' || state == 'BAJA CALIFORNIA SUR'
      new_state = 'BCS'
    elsif state == 'Campeche' || state == 'campeche' || state == 'CAMPECHE'
      new_state = 'CAM'
    elsif state == 'Chiapas' || state == 'chiapas' || state == 'CHIAPAS'
      new_state = 'CHS'
    elsif state == 'Chihuahua' || state == 'chihuahua' || state == 'CHIHUAHUA'
      new_state = 'CHI'
    elsif state == 'Coahuila' || state == 'coahuila' || state == 'COAHUILA'
      new_state = 'COA'
    elsif state == 'Colima' || state == 'colima' || state == 'COLIMA'
      new_state = 'COL'
    elsif state == 'Durango' || state == 'durango' || state == 'DURANGO'
      new_state = 'DGO'
    elsif state == 'Estado de Mexico' || state == 'estado de mexico' || state == 'Estado De Mexico' || state == 'ESTADO DE MEXICO'
      new_state = 'EM'
    elsif state == 'Guanajuato' || state == 'guanajuato' || state == 'GUANAJUATO'
      new_state = 'GTO'
    elsif state == 'Guerrero' || state == 'guerrero' || state == 'GUERRERO'
      new_state = 'GRO'
    elsif state == 'Hidalgo' || state == 'hidalgo' || state == 'HIDALGO'
      new_state = 'HGO'
    elsif state == 'Jalisco' || state == 'jalisco' || state == 'JALISCO'
      new_state = 'JAL'
    elsif state == 'Michoacan' || state == 'michoacan' || state == 'MICHOACAN'
      new_state = 'MICH'
    elsif state == 'Morelia' || state == 'morelia' || state == 'MORELIA'
      new_state = 'MOR'
    elsif state == 'Nayarit' || state == 'nayarit' || state == 'NAYARIT'
      new_state = 'NAY'
    elsif state == 'Nuevo Leon' || state == 'nuevo leon' || state == 'NUEVO LEON'
      new_state = 'NL'
    elsif state == 'Oaxaca' || state == 'oaxaca' || state == 'OAXACA'
      new_state = 'OAX'
    elsif state == 'Puebla' || state == 'puebla' || state == 'PUEBLA'
      new_state = 'PUE'
    elsif state == 'Quintana Roo' || state == 'quintana roo' || state == 'QUINTANA ROO'
      new_state = 'QRO'
    elsif state == 'Queretaro' || state == 'queretaro' || state == 'QUERETARO'
      new_state = 'QR'
    elsif state == 'San Luis Potosi' || state == 'san luis potosi' || state == 'SAN LUIS POTOSI'
      new_state = 'SLP'
    elsif state == 'Sinaloa' || state == 'sinaloa' || state == 'SINALOA'
      new_state = 'SIN'
    elsif state == 'Sonora' || state == 'sonora' || state == 'SONORA'
      new_state = 'SON'
    elsif state == 'Tabasco' || state == 'tabasco' || state == 'TABASCO'
      new_state = 'TAB'
    elsif state == 'Tamaulipas' || state == 'tamaulipas' || state == 'TAMAULIPAS'
      new_state = 'TAM'
    elsif state == 'Tlaxcala' || state == 'tlaxcala' || state == 'TLAXCALA'
      new_state = 'TLAX'
    elsif state == 'Veracruz' || state == 'veracruz' || state == 'VERACRUZ'
      new_state = 'VER'
    elsif state == 'Yucatan' || state == 'yucatan' || state == 'YUCATAN'
      new_state = 'YUC'
    elsif state == 'Zacatecas' || state == 'zacatecas' || state == 'ZACATECAS'
      new_state = 'ZAC'
    end

    return new_state
  end

  def get_clients_sat company

    response = false

    clients = SatW.get_customer_concentration company.try(:rfc)

    if clients['data'].present?
      clients['data'].each do |client|

        if CompanyClient.create(company_id: company.try(:id), name: client['name'], sales: client['total'], credit: client['transactions'].count)
          response = true
        else
          response = false
        end
      end
    else
      company.update(has_clients: false)
    end

    if response
      company.update(step_four: true, has_clients: true)
    end

    return response

  end

  def get_providers_sat company

    response = false

    providers = SatW.get_suppliers_concentration company.try(:rfc)

    if providers['data'].present?
      providers['data'].each do |provider|

        if CompanyProvider.create(company_id: company.try(:id), name: provider['name'], purchase: provider['total'], credit: provider['transactions'].count)
          response = true
        else
          response = false

        end
      end
    else
      company.update(has_providers: false)
    end

    if response
      company.update(step_five: true, has_providers: true)
    end

    return response

  end

  def create_financial_institutions credit_bureau, company_id
    response = false
    if credit_bureau['results'].present?
      if credit_bureau['results'][0]['response'].present?

        if credit_bureau['results'][0]['response'].present?

          if credit_bureau['results'][0]['response']['return'].present?
            if credit_bureau['results'][0]['response']['return']['Personas']['Persona'][0]['Cuentas'].present?
              credit_bureau['results'][0]['response']['return']['Personas']['Persona'][0]['Cuentas']['Cuenta'].each do |account|

                if FinancialInstitution.create(company_id: company_id, institution: account['NombreOtorgante'],
                                               type_contract: I18n.t("contract_type.#{account['TipoContrato']}"), balance: account['CreditoMaximo'], coin: 0)
                  response = true
                else
                  response = false

                end
              end
            end
          end
        else
          if credit_bureau['results'][1]['response']['return'].presnet?

            if credit_bureau['results'][1]['response']['return']['Personas']['Persona'][0]['Cuentas'].present?
              credit_bureau['results'][1]['response']['return']['Personas']['Persona'][0]['Cuentas']['Cuenta'].each do |account|

                if FinancialInstitution.create(company_id: company_id, institution: account['NombreOtorgante'],
                                               type_contract: I18n.t("contract_type.#{account['TipoContrato']}"), balance: account['CreditoMaximo'], coin: 0)
                  response = true
                else
                  response = false

                end

              end
            end
          end

        end
      end
    end

    return response

  end


  private

  # Use callbacks to share common setup or constraints between actions.
  def set_company
    @company = Company.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def company_params
    params.require(:company).permit(:rfc, :step_one, :step_two, :step_three, :step_four, :step_five, :complete, :main_activity,
                                    :address, :name, :step_six,
                                    number_collaborator_attributes: [:id, :operative, :administrative, :sales, :eventual,
                                                                     :unionized, :total],
                                    company_clients_attributes: [:id, :name, :sales, :credit, :_destroy],
                                    company_providers_attributes: [:id, :name, :purchase, :credit, :_destroy],
                                    financial_institutions_attributes: [:id, :company_id, :institution, :credit_type_id,
                                                                        :authorized_line, :balance, :coin, :warranty,
                                                                        :rate, :expiration, :destiny, :_destroy, :type_contract],
                                    company_file_attributes: [:id, :company_id, :authorization_name, :authorization_file,
                                                              :id_name, :id_file, :constancy_name, :constancy_file,
                                                              :financial_statements_one_name, :financial_statements_one_file,
                                                              :financial_statements_two_name, :financial_statements_two_file,
                                                              :financial_statements_parcial_name,
                                                              :financial_statements_parcial_file, :invoice_authorization,
                                                              :invoice_id_file, :invoice_constancy,
                                                              :invoice_financial_statements_one, :invoice_financial_statements_two,
                                                              :invoice_financial_statements_parcial],
                                    main_product_list: [])
  end
end
