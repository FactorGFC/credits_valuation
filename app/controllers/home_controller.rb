require 'openssl'

class HomeController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index

    if Role.where(key: ['god', 'analyst']).pluck(:id).include? current_user.role_id
      @search_companies = policy_scope(Company).ransack(params[:q])
      @companies = @search_companies.result.paginate(page: params[:page], per_page: get_pagination)
    else
      #redirect_to companies_path
      redirect_to '/home_company'
    end
  end

  def home_company
    @user = current_user
    @company = current_user.company
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
          "type": "ciec",
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
              @buro = create_buro @info


              if @buro
                @credential = SatW.get_credential @sat['id']

                if @credential['@type'] != 'hydra:Error'
                  @income_statment = SatW.get_income_statment @user.try(:company).try(:rfc)

                  if !@income_statment.first[0].present?
                    @balance_sheet = SatW.get_balance_sheet @user.try(:company).try(:rfc)

                    if !@balance_sheet.first[0].present?
                      if @company.update(info_company: @info, credential_company: @credential, sat_id: @sat['id'],
                                         income_statment: @income_statment,  buro_id: @buro.first['id'],
                                         sat_password: params[:passsword_ciec], balance_sheet: @balance_sheet,
                                         main_activity: @info['hydra:member'][0]["economicActivities"][0]['name'])
                        @bureau_report = BuroCredito.get_buro_report 4450
                        # @bureau_report = BuroCredito.get_report_by_id 12468
                        @bureau_info = BuroCredito.get_buro_info @buro.first['id']

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
                                if @financial_institutions
                                  if @company.update(step_one: true)
                                    format.html { redirect_to companies_url, notice: t('notifications_masc.success.resource.updated',
                                                                                     resource: t('users.registrations.form.resource')) }
                                  else
                                    format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                                  end
                                else
                                  format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                                end
                              else
                                format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                              end
                            else
                              format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                            end

                          else
                            format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                          end
                        else
                          format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                        end
                      else
                        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                      end
                    else
                      format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                    end
                  else
                    format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                  end
                else
                  format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                end
              else
                format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
              end
            else
              format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
            end
          else
            format.html { redirect_to companies_url, alert: 'El RFC no es valido.' }
          end
        else
          format.html { redirect_to companies_url, alert: 'El RFC debe ser el mismo que el de la compañia.' }
        end
      else
        if @sat['hydra:title'] != 'An error occurred'
          @info = SatW.get_tax_status @user.try(:company).try(:rfc)
          if @info['@type'] != 'hydra:Error'
            @buro = create_buro @info
            if @buro
              @credential = SatW.get_credential @sat['id']

              if @credential['@type'] != 'hydra:Error'
                @income_statment = SatW.get_income_statment @user.try(:company).try(:rfc)

                if !@income_statment.first[0].present?
                  @balance_sheet = SatW.get_balance_sheet @user.try(:company).try(:rfc)
                  if !@balance_sheet.first[0].present?
                    if @company.update(info_company: @info, credential_company: @credential, sat_id: @sat['id'],
                                       sat_password: params[:passsword_firma], key_encoded: key_base_64, cer_encoded: cer_base_64,
                                       buro_id: @buro.first['id'], balance_sheet: @balance_sheet,
                                       main_activity: @info['hydra:member'][0]["economicActivities"][0]['name'])
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
                              if @financial_institutions
                                if @company.update(step_one: true)
                                  format.html { redirect_to companies_url, notice: t('notifications_masc.success.resource.updated',
                                                                                   resource: t('users.registrations.form.resource')) }
                                else
                                  format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                                end
                              else
                                format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                              end
                            else
                              format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                            end
                          else
                            format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                          end
                        else
                          format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                        end
                      else
                        format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                      end
                    else
                      format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                    end
                  else
                    format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                  end
                else
                  format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
                end
              else
                format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
              end
            else
              format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
            end
          else
            format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
          end
        else
          format.html { redirect_to companies_url, alert: 'Hubo un error favor volver a intentar' }
        end
      end
    end

  end

  def create_buro info_sat

    rfc = info_sat['hydra:member'][0]['rfc']
    # rfc = 'ROGA940403PT'
    email = info_sat['hydra:member'][0]['email']
    address = info_sat['hydra:member'][0]['address']['streetName']
    city = info_sat['hydra:member'][0]['address']['locality']


    p "info_sat['hydra:member'][0]['address']['state'] -----------------------------------------------------------------"
    p info_sat['hydra:member'][0]['address']['state']

    state = get_state info_sat['hydra:member'][0]['address']['state']

    p "state ----------------------------------------------------------------------------------------------------------------"
    p state
    zip_code = info_sat['hydra:member'][0]['address']['postalCode']
    interior_number = info_sat['hydra:member'][0]['address']['buildingNumber']
    exterior_number = info_sat['hydra:member'][0]['address']['streetNumber']
    municipality = info_sat['hydra:member'][0]['address']['municipality']

    if info_sat['hydra:member'][0]['company'].present?
      account_type = "PM"
    else
      first_name = info_sat['hydra:member'][0]['person']['firstName']
      first_last_name = info_sat['hydra:member'][0]['person']['middleName']
      second_last_name = info_sat['hydra:member'][0]['person']['lastName']
      account_type = "PF"
    end

    data = [accountType: account_type, email: email, firstName: first_name, middleName: "", rfc: rfc,
            firstLastName: first_last_name, secondLastName: second_last_name, address: address, city: city,
            state: state, zipCode: zip_code, exteriorNumber: exterior_number, interiorNumber: interior_number,
            neighborhood: "", municipality: municipality,
            nationality: "MX"]


    @buro = BuroCredito.create_client data


    p "@buro 2 --------------------------------------------------------------------------------"
    p @buro


    if @buro['result'].present?
      response = @buro['result']
    else
      response = false

    end


    return response
  end

  def get_state state
    if state == 'Aguascalientes' || state == 'aguascalientes'
      new_state = 'AGS'
    elsif state == 'Baja California Norte' || state == 'baja california norte'
      new_state = 'BCN'
    elsif state == 'Baja California Sur' || state == 'baja california sur'
      new_state = 'BCS'
    elsif state == 'Campeche' || state == 'campeche'
      new_state = 'CAM'
    elsif state == 'Chiapas' || state == 'chiapas'
      new_state = 'CHS'
    elsif state == 'Chihuahua' || state == 'chihuahua'
      new_state = 'CHI'
    elsif state == 'Coahuila' || state == 'coahuila'
      new_state = 'COA'
    elsif state == 'Colima' || state == 'colima'
      new_state = 'COL'
    elsif state == 'Durango' || state == 'durango'
      new_state = 'DGO'
    elsif state == 'Estado de Mexico' || state == 'estado de mexico' || state == 'Estado De Mexico'
      new_state = 'EM'
    elsif state == 'Guanajuato' || state == 'guanajuato'
      new_state = 'GTO'
    elsif state == 'Guerrero' || state == 'guerrero'
      new_state = 'GRO'
    elsif state == 'Hidalgo' || state == 'hidalgo'
      new_state = 'HGO'
    elsif state == 'Jalisco' || state == 'jalisco'
      new_state = 'JAL'
    elsif state == 'Michoacan' || state == 'michoacan'
      new_state = 'MICH'
    elsif state == 'Morelia' || state == 'morelia'
      new_state = 'MOR'
    elsif state == 'Nayarit' || state == 'nayarit'
      new_state = 'NAY'
    elsif state == 'Nuevo Leon' || state == 'nuevo leon'
      new_state = 'NL'
    elsif state == 'Oaxaca' || state == 'oaxaca'
      new_state = 'OAX'
    elsif state == 'Puebla' || state == 'puebla'
      new_state = 'PUE'
    elsif state == 'Quintana Roo' || state == 'quintana roo'
      new_state = 'QRO'
    elsif state == 'Queretaro' || state == 'queretaro'
      new_state = 'QR'
    elsif state == 'San Luis Potosi' || state == 'san luis potosi'
      new_state = 'SLP'
    elsif state == 'Sinaloa' || state == 'sinaloa'
      new_state = 'SIN'
    elsif state == 'Sonora' || state == 'sonora'
      new_state = 'SON'
    elsif state == 'Tabasco' || state == 'tabasco'
      new_state = 'TAB'
    elsif state == 'Tamaulipas' || state == 'tamaulipas'
      new_state = 'TAM'
    elsif state == 'Tlaxcala' || state == 'tlaxcala'
      new_state = 'TLAX'
    elsif state == 'Veracruz' || state == 'veracruz'
      new_state = 'VER'
    elsif state == 'Yucatan' || state == 'yucatan'
      new_state = 'YUC'
    elsif state == 'Zacatecas' || state == 'zacatecas'
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

  def create_financial_institutions credit_bureau,company_id
    response = false
    if credit_bureau['results'].present?

      credit_bureau['results'][1]['response']['return']['Personas']['Persona'][0]['Cuentas']['Cuenta'].each do |account|

        if FinancialInstitution.create(company_id: company_id, institution: account['NombreOtorgante'],
                                       type_contract: I18n.t("contract_type.#{account['TipoContrato']}"),balance: account['CreditoMaximo'], coin: 0)
          response = true
        else
          response = false

        end

      end
    end

    return response

  end
end
