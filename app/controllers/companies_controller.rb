class CompaniesController < ApplicationController
  require 'base64'
  before_action :set_company, only: %i[ show edit update destroy company_details open_pdf]
  helper_method :translate_errors, :get_company_info, :get_payments_frecuency, :method_payment

  # GET /companies or /companies.json
  def index
    @user = current_user

    if params[:company_id].present?
      @user.update company_id: params[:company_id]
    end

    if @user.try(:company).present?
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

    p '============='
    p params[:company_user]
    p params[:company]
    p '============='
    user_params = {
        first_name: params[:company_user][:first_name],
        last_name:  params[:company_user][:last_name],
        phone:      params[:company_user][:phone],
        email:      params[:company_user][:email]
    }
    company_params = {
        rfc:                params[:company][:rfc],
        name:               params[:company][:name],
        address:            params[:company][:address],
        status_company_id:  params[:company][:status_company_id]
    }

    user    = User.find_by(email: user_params[:email])
    user ? user : user = User.new(user_params)

    company = Company.new(company_params)

    if company['sat_id'].present?
      sat_id = company['sat_id']
    else
      sat_id = nil
    end

    respond_to do |format|
      if false#company.save
        if user.id
          user.company_id             = company.id
          user.sat_id                 = sat_id
        else
          new_password = [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

          user.company_id             = company.id
          user.role_id                = Role.find_by_key('enterprise').try(:id).present? ?   Role.find_by_key('enterprise').try(:id) : 4
          user.password               = new_password
          user.password_confirmation  = new_password
          user.new_password           = new_password
          user.sat_id                 = sat_id

          user.skip_confirmation!
        end

        if false#user.save
          #Envia correo
          if company.status_company.key == 'aprobada'
            CreditRequestMailer.with(request_data: {user: user, company: company}).credit_request_approved.deliver_now
          elsif company.status_company.key == 'rechazada'
            CreditRequestMailer.with(request_data: {user: user, company: company}).credit_request_refused.deliver_now
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

  # PATCH/PUT /companies/1 or /companies/1.json
  def update
    process_date

    s3 = Aws::S3::Resource.new(access_key_id: 'AKIAWRCSQFXT4UEWO2PS' , region: 'us-east-1',
                               secret_access_key:  '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')
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

            invoice_id_file = @company.id.to_s + [*('a'..'z'),*('0'..'9')].shuffle[0,8].join
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
            invoice_constancy = @company.id.to_s + [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

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
            invoice_financial_statements_one = @company.id.to_s + [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

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
            invoice_financial_statements_two = @company.id.to_s + [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

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
                                         name_financial_statements_two: name_statements_two )
          end
          if company_params[:company_file_attributes][:financial_statements_parcial_file].present?
            invoice_financial_statements_parcial = @company.id.to_s + [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

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

  def company_details
    sort_order = %w(anual trimestral mensual)
    @periods             = Calendar.all.order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.period_type) }
    @calendar_periods_bs = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'balance_sheet').joins(:calendar).order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @calendar_periods_is = CompanyCalendarDetail.where(company_id: @company.id, assign_to: 'income_statement').joins(:calendar).order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
    @request             = Request.find_by(company_id: params[:id])
    @request_comments    = RequestComment.where(request_id: @request.try(:id)).order(:created_at).limit(5)
    @financial_inst      = @company.financial_institutions

    @credit_bureau = @company.credit_bureaus.last

    if @credit_bureau.present?

      #@percentage = avg_gagement @credit_bureau
    end

  end


  def avg_gagement credit_bureau
    total = 0
    total_ones = 0
    if credit_bureau['bureau_report'].present?
      credit_bureau['bureau_report']['results'][1]['response']['return']['Personas']['Persona'][0]['Cuentas']['Cuenta'].pluck('HistoricoPagos').each do |credit|
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

    return (total_ones * 100) /  total
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
          CreditRequestMailer.with(request_data: request_data).credit_request_approved.deliver_now
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

  def asign_calendar
    calendar_ids      = params[:periods].map(&:to_i)
    company_calendars = CompanyCalendarDetail.where(company_id: params[:company_id], assign_to: params[:assign_to]).pluck(:calendar_id)

    new_records       = (calendar_ids - company_calendars)
    destroy_records   = (company_calendars - calendar_ids)

    begin
      CompanyCalendarDetail.where(company_id: params[:company_id], assign_to: params[:assign_to], calendar_id: destroy_records).destroy_all
      BalanceCalendarDetail.transaction do
        new_records.each do |e|
          CompanyCalendarDetail.create(company_id: params[:company_id], calendar_id: e, assign_to: params[:assign_to])
        end
      end

      redirect_to "/company_details/#{params[:company_id]}", notice: "Creado correctamente."
    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def asign_details_to_request
    request         = Request.find_by(company_id: params[:company_id])
    request_params  = params[:request]
    if request
      if request.update(analyst_id: request_params[:analyst_id], process_status_id: request_params[:process_status_id], factor_credit_id: request_params[:credit_type_id], user_id: current_user.id)
        redirect_to "/company_details/#{params[:company_id]}", notice: "Actualizado correctamente."
      end
    else
      new_request = Request.new(company_id: params[:company_id], analyst_id: request_params[:analyst_id], process_status_id: 1, factor_credit_id: request_params[:credit_type_id], user_id: current_user.id)

      if new_request.save
        redirect_to "/company_details/#{params[:company_id]}", notice: "Guardado correctamente."
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
    @step_three_value = @company.step_three && @company.step_two && @company.step_one && !@company.has_clients
    @step_four_value = @company.step_four && @company.step_three && @company.step_two && @company.step_one && !@company.has_providers
    @step_five_value = @company.step_five && @company.step_four && @company.step_three && @company.step_two && @company.step_one
    @step_six_value = @company.step_six && @company.step_five && @company.step_four && @company.step_three && @company.step_two && @company.step_one
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

    @company = current_user.company
    @balance_concepts = BalanceConcept.where(ancestry: nil, active: true)
    @calendar_periods = CompanyCalendarDetail.where(company_id: current_user.try(:company_id), assign_to: 'balance_sheet').joins(:calendar).order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
  end

  def income_statement_capture
    sort_order = %w(mensual trimestral anual)

    @company = current_user.company
    @concepts = IncomeStatementConcept.where(ancestry: nil, active: true)
    @calendar_periods = CompanyCalendarDetail.where(company_id: current_user.try(:company_id), assign_to: 'income_statement').joins(:calendar).order(:year, :period).sort_by { |calendar_p| sort_order.index(calendar_p.calendar.period_type) }
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

    begin
      BalanceCalendarDetail.transaction do
        params[:b_sheet].each do |e|
          bs_detail = BalanceCalendarDetail.find_by(balance_concept_key: e[1][:concept], calendar_id: e[1][:period], company_id: current_user.company_id)
          if bs_detail.present?
            raise ActiveRecord::Rollback unless bs_detail.update(value: e[1][:value])
          else
            raise ActiveRecord::Rollback unless BalanceCalendarDetail.new(balance_concept_key: e[1][:concept], calendar_id: e[1][:period], value: e[1][:value], balance_type: 'FACTOR', company_id: current_user.company_id).save
          end
        end
      end
      redirect_to '/balance_sheet_request', notice: "Creado correctamente."
    rescue StandardError => e
      p "Error: #{e}"
    end

  end

  def create_income_statement_cap
    #p '=entre'
    begin
      IncomeCalendarDetail.transaction do
        params[:b_sheet].each do |e|
          ic_detail = IncomeCalendarDetail.find_by(income_statement_concept_key: e[1][:concept], calendar_id: e[1][:period], company_id: current_user.company_id)
          if ic_detail.present?
            raise ActiveRecord::Rollback unless ic_detail.update(value: e[1][:value])
          else
            raise ActiveRecord::Rollback unless IncomeCalendarDetail.new(income_statement_concept_key: e[1][:concept], calendar_id: e[1][:period], value: e[1][:value], company_id: current_user.company_id).save
          end
        end
      end
      redirect_to '/income_statement_capture', notice: "Creado correctamente."
    rescue StandardError => e
      p "Error: #{e}"
    end
  end

  def end_capture
    @company = current_user.company
    if params[:capture_type] === 'balance_sheet'
      respond_to do |format|
        if @company.update(balance_sheet_finished: true)
          format.html { redirect_to '/login', notice: "Company was successfully updated." }
        else
          format.json { render json: @company.errors, status: :unprocessable_entity }
        end
      end
    else
      respond_to do |format|
        if @company.update(income_statement_finished: true)
          format.html { redirect_to '/login', notice: "Company was successfully updated." }
        else
          format.json { render json: @company.errors, status: :unprocessable_entity }
        end
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
    @years      = @company_bs.pluck(:year).uniq.sort
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

    @bureau_report = BuroCredito.get_buro_report 4450

    respond_to do |format|
      if @company.try(:credit_bureaus).last.update(bureau_report: @bureau_report)
        format.html { redirect_to company_details_path, notice: 'La compañia se ha actualizado correctamente' }
      else
        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
      end
    end
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
                                                              :financial_statements_parcial_file,:invoice_authorization,
                                                              :invoice_id_file, :invoice_constancy,
                                                              :invoice_financial_statements_one,:invoice_financial_statements_two,
                                                              :invoice_financial_statements_parcial],
                                    main_product_list: [])
  end
end
