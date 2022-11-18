# == Schema Information
#
# Table name: companies
#
#  id                        :bigint           not null, primary key
#  address                   :string
#  balance_sheet             :jsonb
#  balance_sheet_finished    :boolean
#  bufo_confirmation_date    :datetime
#  buro_confirmation_code    :integer
#  cash_flow                 :jsonb
#  cer_encoded               :text
#  client_type               :string
#  complete                  :boolean
#  confirmation_message      :boolean
#  credential_company        :jsonb
#  customers                 :jsonb
#  forwarded_code            :boolean
#  group_company             :boolean
#  has_clients               :boolean
#  has_providers             :boolean
#  income_statement_finished :boolean
#  income_statment           :jsonb
#  info_company              :jsonb
#  key_encoded               :text
#  main_activity             :string
#  main_products             :string
#  name                      :string
#  providers                 :jsonb
#  rfc                       :string
#  sat_password              :string
#  step_five                 :boolean
#  step_four                 :boolean
#  step_one                  :boolean
#  step_six                  :boolean
#  step_three                :boolean
#  step_two                  :boolean
#  welcome_message           :boolean
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  buro_id                   :string
#  sat_id                    :string
#  status_company_id         :bigint
#
# Indexes
#
#  index_companies_on_status_company_id  (status_company_id)
#
# Foreign Keys
#
#  fk_rails_...  (status_company_id => status_companies.id)
#

class Company < ApplicationRecord

  require 'base64'
  require 'twilio-ruby'


  has_one :user
  has_many :company_clients, inverse_of: :company
  has_many :company_providers, inverse_of: :company
  has_many :financial_institutions, inverse_of: :company
  has_many :balance_calendar_details
  has_many :company_calendar_details
  has_many :income_calendar_details
  has_many :company_conciliations
  has_many :company_income_statements
  has_many :company_balance_sheets
  has_many :credit_bureaus
  has_many :requests
  has_one :company_file
  has_one :number_collaborator
  #belongs_to :company_balance_sheet, optional: true
  belongs_to :status_company, optional: true

  validates_presence_of :name, :rfc

  accepts_nested_attributes_for :company_clients, allow_destroy: true,:reject_if => :no_clients
  accepts_nested_attributes_for :company_providers, allow_destroy: true, :reject_if => :no_providers
  accepts_nested_attributes_for :number_collaborator, allow_destroy: true
  accepts_nested_attributes_for :financial_institutions,  allow_destroy: true, :reject_if => :no_financial_institutions
  accepts_nested_attributes_for :company_file, allow_destroy: true


  acts_as_taggable_on :main_products

  def self.remove_company id
    company = Company.find(id)
    if company.user.present?
      company.user.delete
    end
    if company.number_collaborator.present?

      company.number_collaborator.delete
    end
    CompanyClient.where(company_id: id).delete_all
    CompanyProvider.where(company_id: id).delete_all
    CompanyFile.where( company_id: id ).delete_all
    FinancialInstitution.where(company_id: id).delete_all
    IncomeCalendarDetail.where(company_id: id).delete_all
    BalanceCalendarDetail.where( company_id: id ).delete_all
    CompanyCalendarDetail.where( company_id: id ).delete_all
    IncomeStatementFile.where( company_id: id ).delete_all
    CompanyIncomeStatement.where( company_id: id ).delete_all
    CompanyBalanceSheet.where( company_id: id ).delete_all
    CreditBureau.where( company_id: id ).delete_all
    FReasonsCompany.where( company_id: id ).delete_all
    CompanyFlow.where( company_id: id ).delete_all
    Comment.where(company_id: id).delete_all
    requests = Request.where(company_id: id)
    requests.each do |request|
      RequestComment.where(request_id: request.id).delete_all
    end
    requests.delete_all
    company.delete

  end

  def self.approved?
    self.status_company.key == 'aprobada'
  end

  #Message and Comunication with Companies
  def self.send_msj_to_company company, user, step
    begin

      if step.eql? 1
        msg = "Factor GFC: La Solicitud de Crédito para la Empresa #{company.try(:name)}, esta siendo procesada, pronto recibiras noticias importantes referente a tú solicitud"
      elsif step.eql? 2
        msg = "Factor GFC: Felicidades nos gustaría trabajar para ofrecer el mejor crédito para #{company.try(:name)}, Es necesario que nos brindes mas información dentro del portal: https://analisisfg.com/login, ingresando con tu correo: #{user.try(:email)} y password: #{user.try(:new_password)}  "
      elsif step.eql? 3
        msg = "Factor GFC: Nos encontramos validando tu información, pronto nos comunicaremos contigo para informarte del proceso."
      end

      account_sid = 'ACefa09be571fd58ece80c24205bfdd4af'
      auth_token = '54ce43dd285cd31d28b28388ed5ec5ba'
      client = Twilio::REST::Client.new(account_sid, auth_token)

      from = '+14157410844' # Your Twilio number
      to = "+521#{user.try(:phone)}"# Your mobile phone number
      #to = "+5216141972726"
      client.messages.create(
        from: from,
        to: to,
        body: msg
      )
    rescue
      p "Error al enviar msj de bienvenida"
      p "Error #{$!}"
    end
  end

  #Confirmation Code for buró consult
  def self.send_buro_code phone, code
    begin

      msg = "Factor GFC Global, realizará una consulta a tu buró de crédito para obtener información importante para tusolicitud de crédito, favor de validar el código #{code}, dentro de la plataforma."

      account_sid = 'ACefa09be571fd58ece80c24205bfdd4af'
      auth_token = 'adc501aebb84c6fcf54219fb0f8aa193'
      client = Twilio::REST::Client.new(account_sid, auth_token)

      from = '+14157410844' # Your Twilio number
      to = "+521#{phone}"# Your mobile phone number
      #to = "+5216141972726"

      client.messages.create(
          from: from,
          to: to,
          body: msg
      )
      return true
    rescue
      p "Error al enviar SMS de confirmación"
      p "Error #{$!}"
      return false
    end
  end

  # validates_length_of   :rfc, :is => 12..13, :message => "RFC invalido"
  def encode_image file
    Base64.strict_encode64(file.read)
  end

  def no_clients(attributes)
    attributes[:name].blank? || attributes[:sales].blank? || attributes[:credit].blank?
  end

  def no_providers(attributes)
    attributes[:name].blank? || attributes[:purchase].blank? || attributes[:credit].blank?
  end

  def no_financial_institutions(attributes)
    attributes[:institution].blank? || attributes[:credit_type_id].blank? || attributes[:authorized_line].blank? ||
        attributes[:balance].blank? || attributes[:coin].blank? || attributes[:warranty].blank? || attributes[:rate].blank? ||
        attributes[:expiration].blank? || attributes[:destiny].blank?
  end

  def self.save_balance_sheet balance_sheet, company_id
    years_array = balance_sheet.first.except('category', 'children').keys
    bs_records  = []

    balance_sheet.each do |first_lvl|
      years_array.each do |year|
        item = {
            company_id:          company_id,
            year:                year,
            balance_concept_id:  BalanceConcept.find_by(key: first_lvl['category']).try(:id),
            value:               first_lvl[year]
        }

        bs_records.push item
      end

      if first_lvl['children'].present?
        first_lvl['children'].each do |second_lvl|
          years_array.each do |year|
            item = {
                company_id:          company_id,
                year:                year,
                balance_concept_id:  BalanceConcept.find_by(key: second_lvl['category']).try(:id),
                value:               second_lvl[year]
            }

            bs_records.push item
          end

          if second_lvl['children'].present?
            second_lvl['children'].each do |third_lvl|
              years_array.each do |year|
                item = {
                    company_id:          company_id,
                    year:                year,
                    balance_concept_id:  BalanceConcept.find_by(key: third_lvl['category']).try(:id),
                    value:               third_lvl[year]
                }
                bs_records.push item
              end

              if third_lvl['children'].present?
                third_lvl['children'].each do |fourth_lvl|
                  years_array.each do |year|
                    item = {
                        company_id:          company_id,
                        year:                year,
                        balance_concept_id:  BalanceConcept.find_by(key: fourth_lvl['category']).try(:id),
                        value:               fourth_lvl[year]
                    }
                    bs_records.push item
                  end

                  if fourth_lvl['children'].present?
                    fourth_lvl['children'].each do |fifth_lvl|
                      years_array.each do |year|
                        item = {
                            company_id:          company_id,
                            year:                year,
                            balance_concept_id:  BalanceConcept.find_by(key: fifth_lvl['category']).try(:id),
                            value:               fifth_lvl[year]
                        }
                        bs_records.push item
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end

    begin
      transaction do
        bs_records.map do |item_bs|
          raise ActiveRecord::Rollback unless CompanyBalanceSheet.new(item_bs).save
        end
      end

      p 'ALL GOOD====>'
      return true
    rescue StandardError => e
      p 'ERROR====>'
      p e
      return false
    end
  end

  def self.save_income_statement income_statement, company_id
    years_array = income_statement.first.except('category', 'children').keys
    is_records  = []

    income_statement.each do |first_lvl|
      years_array.each do |year|
        item = {
            company_id:                   company_id,
            year:                         year,
            income_statement_concept_id:  IncomeStatementConcept.find_by(key: first_lvl['category']).try(:id),
            value:                        first_lvl[year]
        }

        is_records.push item
      end

      if first_lvl['children'].present?
        first_lvl['children'].each do |second_lvl|
          years_array.each do |year|
            item = {
                company_id:                   company_id,
                year:                         year,
                income_statement_concept_id:  IncomeStatementConcept.find_by(key: second_lvl['category']).try(:id),
                value:                        second_lvl[year]
            }

            is_records.push item
          end

          if second_lvl['children'].present?
            second_lvl['children'].each do |third_lvl|
              years_array.each do |year|
                item = {
                    company_id:                   company_id,
                    year:                         year,
                    income_statement_concept_id:  IncomeStatementConcept.find_by(key: third_lvl['category']).try(:id),
                    value:                        third_lvl[year]
                }
                is_records.push item
              end

              if third_lvl['children'].present?
                third_lvl['children'].each do |fourth_lvl|
                  years_array.each do |year|
                    item = {
                        company_id:                   company_id,
                        year:                         year,
                        income_statement_concept_id:  IncomeStatementConcept.find_by(key: fourth_lvl['category']).try(:id),
                        value:                        fourth_lvl[year]
                    }
                    is_records.push item
                  end

                  if fourth_lvl['children'].present?
                    fourth_lvl['children'].each do |fifth_lvl|
                      years_array.each do |year|
                        item = {
                            company_id:                   company_id,
                            year:                         year,
                            income_statement_concept_id:  IncomeStatementConcept.find_by(key: fifth_lvl['category']).try(:id),
                            value:                        fifth_lvl[year]
                        }
                        is_records.push item
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end

    begin
      transaction do
        is_records.map do |item_bs|
          raise ActiveRecord::Rollback unless CompanyIncomeStatement.new(item_bs).save
        end
      end

      p 'ALL GOOD====>'
      return true
    rescue StandardError => e
      p 'ERROR====>'
      p e
      return false
    end
  end


  def self.generate_pdf_name type, company_id
    case type
    when 'id_file'
      "Identificacion_Oficial_#{company_id}.pdf"
    when 'constancy_file'
      "Constancia_De_Situacion_Fiscal_#{company_id}.pdf"
    when "financial_statements_one_file"
      "Estados_Financieros_Cierre_anual_1_#{company_id}.pdf"
    when "financial_statements_two_file"
      "Estados_Financieros_Cierre_anual_2_#{company_id}.pdf"
    when "financial_statements_parcial_file"
      "Estados_Financieros_Cierre_parcial_#{company_id}.pdf"
    else
      "#{company_id}.pdf"
    end
  end

  #Calcula numero de meses según periodo
  def self.calculate_months period
    if period == 'anual'
      months = 12
    elsif period === 'trimestral'
      months = 3
    else
      months = 1
    end
    return months
  end

  #Convierte las cantidades a pesos para manejarlos valores en la misma escala
  def self.convert_value_to_units scale, value
    if value
      if scale === 'millones'
        value = value*1000000
      elsif scale === 'miles'
        value = value*1000
      else
        value = value
      end
    else
      value = nil
    end

    return value
  end

  #Convierte las cantidades a miles para manejarlos valores en razones financieras
  def self.convert_value_to_miles scale, value
    if value
      if scale === 'millones'
        value = value*1000000
      elsif scale === 'pesos'
        value = value/1000
      else
        value = value
      end
    else
      value = nil
    end

    return value
  end

  #OPERACIONES
  def self.calculate_crecimiento_nom_ventas income_year0, income_year1, months, inflation
    if income_year0.nil? or income_year0 == 0
      value = 0.0
    else
      if inflation.present?
        value = ((income_year1*(12/months))/ (income_year0*(1+(inflation/100))))-1
      else
        value = ((income_year1*(12/months))/ income_year0)-1
      end
      value = 0 if value.nan?
    end
    return value
  end

  def self.calculate_crecimiento_sostenible net_margin, pas_tot_cap_cont, asset_turnover, dividends_paid_in_cash, net_profit
    #Se convierte porcentaje a cantidad de net_margin
    if asset_turnover.nil? or asset_turnover != 0
      net_margin = net_margin/100
      value = ((net_margin)*(1-(dividends_paid_in_cash/net_profit))*(1+pas_tot_cap_cont))/((1/asset_turnover)-(net_margin*(1-(dividends_paid_in_cash/net_profit))*(1+pas_tot_cap_cont)))
    else
      value = 0.0
    end

    return value*100
  end

  def self.calculate_total_pas_fin banks_st, other_pas_circ, principal_payment, banks_lt, other_pas_lp
    value = (banks_st + other_pas_circ + principal_payment + banks_lt + other_pas_lp).round(2)

    return value
  end

  def self.calculate_rotacion_activos income_year1, total_active0, total_active1, months

    if (total_active1+total_active0) != 0
      value = ((income_year1/months)*12)/((total_active1+total_active0)/2)
    else
      value = 0.0
    end

    return value.round(2)
  end

  def self.calculate_margen_operativo total_active, gross_profit
    if total_active and total_active != 0
      value = total_active > 0 ? gross_profit/total_active : 0
      value = (value*100).round(1)
    else
      value = 0.0
    end
    return value
  end

  def self.calculate_rentabilidad_base_capital net_profit, total_capital0, total_capital1, months, kind
    value = 0.0
    if total_capital0 and (total_capital0+total_capital1)/2 != 0
      #1 es referente al año del row actual, el 0 es del año anterior
      value = ((net_profit/months)*12)/((total_capital0+total_capital1)/2)
      value = (value*100).round(1)
    else
      value = 0.0
    end

    return value
  end

  def self.calculate_margen_neto net_profit, total_active
    if total_active != 0
      value = (net_profit/total_active)
      value = (value*100).round(1)
    else
      value = 0.0
    end
    return value
  end

  def self.calculate_razon_circulante activo_circulante, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
    pasivo_circulante = providers + contributions_payable + advance_customers + banks_st + other_pas_cp + principal_payment + other_pas_circ

    if pasivo_circulante != 0
      #pasivo_circ se está obteniento del pasivo total
      value = activo_circulante/pasivo_circulante
      value = (value).round(2)
    else
      value = 0.0
    end
    return value
  end

  def self.calculate_prueba_acido activo_circulante, inventarios, providers, contributions_payable, advance_customers, banks_st, other_pas_cp, principal_payment, other_pas_circ
    pasivo_circulante = providers + contributions_payable + advance_customers + banks_st + other_pas_cp + principal_payment + other_pas_circ

    if pasivo_circulante != 0
      #pasivo_circ se está obteniento del pasivo total
      value = (activo_circulante-inventarios)/pasivo_circulante
      value = (value).round(2)
    else
      value = 0.0
    end
    p '=============='
    p '=========='
    p '======'
    p '=============='
    p '=========='
    p '======'
    p activo_circulante
    p inventarios
    p pasivo_circulante
    p value
    p '======'
    p '=========='
    p '=============='
    p '======'
    p '=========='
    p '=============='
    return value
  end

  def self.calculate_pasTotal_capContable total_pasive, total_capital
    if total_pasive != 0
      value = (total_pasive)/total_capital
      value = (value).round(2)
    else
      value = 0.0
    end

    return value
  end

  def self.calculate_client_days clients, income_vts, months
    if income_vts != 0
      value = (clients/income_vts)*(months*30)
      value = value.round
    else
      value = 0
    end
    return value
  end

  def self.calculate_inventory_days inventory, sales_costs, months
    if sales_costs != 0
      value = (inventory*30*months)/sales_costs
      value = value
    else
      value = 0.0
    end
    return value
  end

  def self.calculate_provider_days providers, payable_conts_fop, sales_costs, months
    if sales_costs != 0
      value = ((providers+payable_conts_fop)/sales_costs)*(months*30)
      value = value.round(1)
    else
      value = 0.0
    end
    return value
  end

  def self.calculate_financial_cycle client_days, inventory_days, provider_days
    value = client_days + inventory_days - provider_days
    value = value.round(1)
    return value
  end

  def self.calculate_investment_in_work clients, ctas_x_cob_fop, inventory, providers, ctas_x_pag_fop
    value = clients + ctas_x_cob_fop + inventory - providers - ctas_x_pag_fop
    value = (value/1000).round #Convertir a miles
    return value
  end

  def self.calculate_interest_coverage utility_op, dep_y_amort, financial_expense
    if financial_expense == 0
      financial_expense = 1
    end

    value = (utility_op+dep_y_amort)/financial_expense
    value = value.round(2)
    return value
  end

  def self.calculate_debt_coverage utility_op, porc_circl_y_otros_pas, financial_expense
    if financial_expense == 0 and porc_circl_y_otros_pas == 0
      sum2_div = 1
    else
      sum2_div = financial_expense + porc_circl_y_otros_pas
    end
    value = utility_op/sum2_div
    value = value.round(1)
    return value
  end

  def self.calculate_flujo_neto_pas_fin net_flow, pas_fin_total
    if pas_fin_total != 0
      value = net_flow/pas_fin_total
    else
      value = 0
    end
    return (value*100).round(1)
  end

  def self.calculate_flujo_neto_pas_total net_flow, pas_total
    if pas_fin_total != 0
      value = net_flow/pas_total
    else
      value = 0
    end

    return (value*100).round(1)
  end

  def self.calculate_finantial_lp banks_lt, other_passives, dep_and_amort, utility_operation, months
    sum2_div = utility_operation + dep_and_amort
    other_passives = 0
    if sum2_div < 0
      value = -0#'UAFIRDA Neg.'
    elsif sum2_div == 0
      value = 0
    else
      value = (banks_lt+other_passives)/(((utility_operation+dep_and_amort)/months)*12)
      value = value.round(2)
    end
    return value
  end

  def self.calculate_finantial_total utility_operation, dep_and_amort, banks_st, banks_lt, other_passives, months
    #ESTE PROCESO LE FALTAN DATOS DEL DESGLOCE DE PASIVO ESTE CÓDIGO PERTENECE A EL CALCULO ANTERIOR.
    sum2_div = utility_operation + dep_and_amort
    #other_passives -= (banks_st+banks_lt)

    if sum2_div < 0
      value = -0#'UAFIRDA Neg.'
    elsif sum2_div == 0
      value = 0
    else
      value = (other_passives)/(((sum2_div)/months)*12)
      value = value.round(2)
    end

    return value
  end

  ###===Funciones para flujo de efectivo
  def self.calculate_customer_variation clients_year1, clients_year0
    value = -(clients_year1 - clients_year0)

    return value.round(2)
  end

  def self.calculate_inventory_variance inventory_year1, inventory_year0
    value = -(inventory_year1 - inventory_year0)

    return value.round(2)
  end

  def self.calculate_supplier_variation supplier_year1, supplier_year0
    value = (supplier_year1 - supplier_year0)

    return value.round(2)
  end

  def self.calculate_advance_customers advance_customers1, advance_customers0
    value = (advance_customers1 - advance_customers0)

    return value.round(2)
  end

  def self.calculate_operation_flow gross_flow, customer_variation, inventory_variation, supplier_variation, customer_advance_variation
    value = (gross_flow + customer_variation + inventory_variation + supplier_variation + customer_advance_variation)

    return value.round(2)
  end

  def self.calculate_paid_taxes_ptu isr_value, ptu_value, contributions_payable
    value = -(isr_value + ptu_value)-contributions_payable

    return value.round(2)
  end

  def self.calculate_net_flow operation_flow, paid_taxes_ptu, financial_expense
    value = (operation_flow + paid_taxes_ptu + financial_expense)

    return value.round(2)
  end

  def self.calculate_variation_fixed_assets land_buildings_1, machinery_equipment_1, other_fixed_assets_1, land_buildings_0, machinery_equipment_0, other_fixed_assets_0, accumulated_depreciation
    value = -((land_buildings_1 + machinery_equipment_1 + other_fixed_assets_1) - ((land_buildings_0 + machinery_equipment_0 + other_fixed_assets_0) - accumulated_depreciation))

    return value.round(2)
  end

  def self.calculate_variation_other_assets other_current_assets_1, other_current_assets_0, charges_and_expenses_1, charges_and_expenses_0
    value = -(other_current_assets_1 - other_current_assets_0) - (charges_and_expenses_1 - charges_and_expenses_0)

    return value.round(2)
  end

  def self.calculate_variation_other_liabilities other_passives_1, other_passives_0
    value = other_passives_1 - other_passives_0

    return value.round(2)
  end

  def self.calculate_cash_increase_decrease net_flow, var_fixed_assets, var_other_assets, var_other_liabilities
    value =  net_flow + var_fixed_assets + var_other_assets + var_other_liabilities

    return value.round(2)
  end
end
