require 'openssl'

class HomeController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index

    if Role.where(key: ['god', 'analyst','credit_area','promotion_area','credit_management']).pluck(:id).include? current_user.role_id
      @search_companies = policy_scope(Company).ransack(params[:q])
      @companies = @search_companies.result.order(created_at: :desc).paginate(page: params[:page], per_page: get_pagination)
    elsif Role.where(key: ['committee']).pluck(:id).include? current_user.role_id
      redirect_to '/events'
    else
      #redirect_to companies_path
      redirect_to '/home_company'
    end
  end

  def home_company
    @user           = current_user
    @company        = current_user.company

    cc_details_bs = @company.company_calendar_details.where(assign_to: 'balance_sheet')
    cc_details_is = @company.company_calendar_details.where(assign_to: 'income_statement')
    @data_bs_captured  = cc_details_bs.count == cc_details_bs.where(capture_finished: true).count
    @data_is_captured  = cc_details_is.count == cc_details_is.where(capture_finished: true).count

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
    unless @user.try(:company).try(:complete)
      redirect_to '/request_steps'
    end
  end

  def complete_user

  end

  def create_sat_user
    @user = current_user


    @company = @user.company

    if params[:rfc].present? && params[:cer].nil? && params[:key].nil?
      params_ciec = true
      rfc_valid = params[:rfc] == @company.rfc
      data = {
          "type":"ciec",
          "rfc": params[:rfc],
          "password": params[:passsword_ciec]
      }

    elsif params[:cer].present? && params[:key].present?
      params_ciec = false
      cer_base_64 = Base64.encode64(File::read(params[:cer]))
      key_base_64 = Base64.encode64(File::read(params[:key]))

      data = {
          "type": "efirma",
          "certificate": cer_base_64,
          "privateKey": key_base_64,
          "password": params[:passsword_firma]
      }
    end

    @sat = SatW.create_sat_ws data


    respond_to do |format|
      if params_ciec
        if rfc_valid

          if @sat['hydra:title'] != 'An error occurred'

            @info = SatW.get_tax_status @user.try(:company).try(:rfc)

            if @info['@type'] != 'hydra:Error'

              if @info['hydra:member'][0]['company'].present?
               client_type = "PM"
              else
               client_type = "PF"
              end

              @buro = create_buro @info, @user.try(:phone)


              if @buro
                @credential = SatW.get_credential @sat['id']

                if @credential['@type'] != 'hydra:Error'
                  @income_statment = SatW.get_income_statment @user.try(:company).try(:rfc)

                  if !@income_statment.first[0].present?
                    @balance_sheet = SatW.get_balance_sheet @user.try(:company).try(:rfc)

                    if !@balance_sheet.first[0].present?
                      @cash_flow = SatW.get_cash_flow @user.try(:company).try(:rfc)
                      providers = SatW.get_suppliers_concentration @user.try(:company).try(:rfc)
                      customers = SatW.get_customer_concentration @user.try(:company).try(:rfc)


                      if @company.update(info_company: @info, credential_company: @credential, sat_id: @sat['id'],
                                         income_statment: @income_statment, buro_id: @buro.first['id'],
                                         sat_password: params[:passsword_ciec], balance_sheet: @balance_sheet,
                                         main_activity: @info['hydra:member'][0]["economicActivities"][0]['name'],
                                         client_type: client_type, providers: providers, customers: customers,
                                         cash_flow: @cash_flow)

                        if @user.try(:company).try(:rfc) == 'FGL190102DH6'

                          @bureau_report = BuroCredito.get_report_by_id 97831#4450 60368
                        else
                          @bureau_report = BuroCredito.get_buro_report 60742 #
                          # ,@info #4450 60368
                          p "@bureau_report ---------------------------------------------------------------------------------------------------------------------"
                          p @bureau_report

                        end



                        # @bureau_report = BuroCredito.get_report_by_id 12468
                        # @bureau_info = BuroCredito.get_buro_info @buro.first['id'], @info
                        @bureau_info = BuroCredito.get_buro_info 60742, @info

                        p "@bureau_info --------------------------------------------------------------------------------"
                        p @bureau_info

                        if CreditBureau.create(company_id: @company.id, bureau_report: @bureau_report, bureau_id: @buro.first['id'], bureau_info: @bureau_info)
                          if @user.update(sat_id: @sat['id'])

                            #UPDATE DE COMPANY CON BALANCE-SHEET
                            @clients = get_clients_sat @user.try(:company)
                            Company.save_balance_sheet @company.balance_sheet, @company.id
                            Company.save_income_statement @company.income_statment, @company.id
                            if @clients
                              @providers = get_providers_sat @user.try(:company)
                              if @providers
                                @financial_institutions = create_financial_institutions @bureau_report, @company.id
                                if @company.update(step_one: true)
                                  format.html { redirect_to companies_url, notice: t('notifications_masc.success.resource.updated',
                                                                                     resource: t('users.registrations.form.resource')) }
                                else
                                  format.html { redirect_to companies_url, alert: '(1)Hubo un error favor volver a intentar' }
                                end
                              else
                                format.html { redirect_to companies_url, alert: '(3)Hubo un error favor volver a intentar' }
                              end
                            else
                              format.html { redirect_to companies_url, alert: '(4)Hubo un error favor volver a intentar' }
                            end
                          else
                            format.html { redirect_to companies_url, alert: '(5)Hubo un error favor volver a intentar' }
                          end
                        else
                          format.html { redirect_to companies_url, alert: '(6)Hubo un error favor volver a intentar' }
                        end
                      else
                        format.html { redirect_to companies_url, alert: '(7)Hubo un error favor volver a intentar' }
                      end
                    else
                      format.html { redirect_to companies_url, alert: '(10)Hubo un error favor volver a intentar' }
                    end
                  else
                    format.html { redirect_to companies_url, alert: '(11)Hubo un error favor volver a intentar' }
                  end
                else
                  format.html { redirect_to companies_url, alert: '(12)Hubo un error favor volver a intentar' }
                end
              else
                format.html { redirect_to companies_url, alert: '(13)Hubo un error favor volver a intentar' }
              end
            else
              format.html { redirect_to companies_url, alert: '(14)Hubo un error favor volver a intentar' }
            end
          else
            format.html { redirect_to companies_url, alert: 'El RFC o la contraseña no son validas.' }
          end
        else
          format.html { redirect_to companies_url, alert: 'El RFC debe ser el mismo que el de la compañia.' }
        end
      else
        if @sat['hydra:title'] != 'An error occurred'
          @info = SatW.get_tax_status @user.try(:company).try(:rfc)

          if @info['@type'] != 'hydra:Error'
            if @info['hydra:member'][0]['company'].present?
              client_type = "PM"
            else
              client_type = "PF"
            end
            @buro = create_buro @info,@user.try(:phone)
            if @buro
              @credential = SatW.get_credential @sat['id']

              if @credential['@type'] != 'hydra:Error'
                @income_statment = SatW.get_income_statment @user.try(:company).try(:rfc)

                if !@income_statment.first[0].present?
                  @balance_sheet = SatW.get_balance_sheet @user.try(:company).try(:rfc)
                  if !@balance_sheet.first[0].present?
                    @cash_flow = SatW.get_cash_flow @user.try(:company).try(:rfc)
                    providers = SatW.get_suppliers_concentration @user.try(:company).try(:rfc)
                    customers = SatW.get_customer_concentration @user.try(:company).try(:rfc)
                    if @company.update(info_company: @info, credential_company: @credential, sat_id: @sat['id'],
                                       sat_password: params[:passsword_firma], key_encoded: key_base_64, cer_encoded: cer_base_64,
                                       buro_id: @buro.first['id'], balance_sheet: @balance_sheet,
                                       main_activity: @info['hydra:member'][0]["economicActivities"][0]['name'],
                                       client_type: client_type, providers: providers, customers: customers,
                                       cash_flow: cash_flow)
                      @bureau_report = BuroCredito.get_buro_report @buro.first['id']
                      @bureau_info = BuroCredito.get_buro_info @buro.first['id']

                      if CreditBureau.create(company_id: @company.id, bureau_report: @bureau_report, bureau_id: @buro.first['id'], bureau_info: @bureau_info)

                        if @user.update(sat_id: @sat['id'])
                          #UPDATE DE COMPANY CON BALANCE-SHEET
                          @clients = get_clients_sat @user.try(:company)
                          if @clients
                            @providers = get_providers_sat @user.try(:company)
                            if @providers
                              @financial_institutions = create_financial_institutions @bureau_report, @company.id

                              if @company.update(step_one: true)
                                format.html { redirect_to companies_url, notice: t('notifications_masc.success.resource.updated',
                                                                                   resource: t('users.registrations.form.resource')) }
                              else
                                format.html { redirect_to companies_url, alert: '(1)Hubo un error favor volver a intentar' }
                              end

                            else
                              format.html { redirect_to companies_url, alert: '(3)Hubo un error favor volver a intentar' }
                            end
                          else
                            format.html { redirect_to companies_url, alert: '(4)Hubo un error favor volver a intentar' }
                          end
                        else
                          format.html { redirect_to companies_url, alert: '(5)Hubo un error favor volver a intentar' }
                        end
                      else
                        format.html { redirect_to companies_url, alert: '(6)Hubo un error favor volver a intentar' }
                      end
                    else
                      format.html { redirect_to companies_url, alert: '(7)Hubo un error favor volver a intentar' }
                    end
                  else
                    format.html { redirect_to companies_url, alert: '(8)Hubo un error favor volver a intentar' }
                  end
                else
                  format.html { redirect_to companies_url, alert: '(10)Hubo un error favor volver a intentar' }
                end
              else
                format.html { redirect_to companies_url, alert: '(11)Hubo un error favor volver a intentar' }
              end
            else
              format.html { redirect_to companies_url, alert: '(12)Hubo un error favor volver a intentar' }
            end
          else
            format.html { redirect_to companies_url, alert: '(13)Hubo un error favor volver a intentar' }
          end
        else
          format.html { redirect_to companies_url, alert: '(14)Hubo un error favor volver a intentar' }
        end
      end
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
     trade_name = info_sat['hydra:member'][0]['company']['tradeName']
     basic_rfc = rfc.first(9)
     
     data = [accountType: account_type, tradeName: trade_name,  rfc: rfc, basicRFC: basic_rfc, address: address,
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
             municipality: municipality, nationality: "MX",phone: user_phone]
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
end
