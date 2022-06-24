# == Schema Information
#
# Table name: companies
#
#  id                        :bigint           not null, primary key
#  address                   :string
#  balance_sheet             :jsonb
#  balance_sheet_finished    :boolean
#  cer_encoded               :text
#  complete                  :boolean
#  credential_company        :jsonb
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
#  rfc                       :string
#  sat_password              :string
#  step_five                 :boolean
#  step_four                 :boolean
#  step_one                  :boolean
#  step_six                  :boolean
#  step_three                :boolean
#  step_two                  :boolean
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

end
