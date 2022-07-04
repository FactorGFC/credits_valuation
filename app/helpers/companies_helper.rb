#Console: include Rails.application.helpers

module CompaniesHelper
  #Valor obtenido de satws de balance
  def company_balance_sheet_value(company_id, calendar, number_key)
    company_bs = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)
    company_bs.present? ? company_bs.round(2) : 0
  end

  #Valor capturado en FG de balance
  def balance_calendar_detail_value(company_id, calendar, number_key)
    balance_cd = BalanceCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, balance_concept_key: number_key).try(:first).try(:value)
    balance_cd.present? ? balance_cd.round(2) : 0
  end

  #Valor obtenido de satws para estado de resultados
  def company_income_stat_value(company_id, calendar, number_key)
    company_is = CompanyIncomeStatement.where(company_id: company_id, year: calendar.year, income_statement_concept_id: IncomeStatementConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)
    company_is.present? ? company_is.round(2) : 0
  end

  #Valor capturado en FG para estado de resultados
  def income_calendar_detail_value(company_id, calendar, number_key)
    income_cs = IncomeCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, income_statement_concept_key: number_key).try(:first).try(:value)
    income_cs.present? ? income_cs.round(2) : 0
  end

  def calculate_percentage(type, company_id, calendar, number_key)
    if type === 'balance_sheet'
      sat_value = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f).abs
      fg_value  = BalanceCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, balance_concept_key: number_key).try(:first).try(:value).to_f.abs
    else
      sat_value = CompanyIncomeStatement.where(company_id: company_id, year: calendar.year, income_statement_concept_id: IncomeStatementConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f).abs
      fg_value  = IncomeCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, income_statement_concept_key: number_key).try(:first).try(:value).to_f.abs
    end

    max_num = [sat_value, fg_value].max
    min_num = [sat_value, fg_value].min

    if max_num != 0 and min_num != 0
      percent_value = ((max_num - min_num)/min_num).round(2)
      if percent_value <= 15
        [percent_value, 'green-badge']
      elsif percent_value > 15 and percent_value <= 30
        [percent_value, 'yellow-badge']
      elsif percent_value > 30 and percent_value <= 100
        [percent_value, 'red-badge']
      else
        ['+100', 'red-badge']
      end
    else
      ['+100', 'red-badge']
    end
  end

  def calculate_degrees score
    if score.present?
      if score < 550
        (score * 45)/549
      elsif score >= 550 and score < 650
        45+(((100-(650-score))*45)/100)
      elsif score >= 650 and score < 750
        90+(((100-(750-score))*45)/100)
      else
        135+(((100-(850-score))*45)/100)
      end
    else
      0
    end
  end

  def calculate_face score
    if score.present?
      if score < 550
        'face-bad.png'
      elsif score >= 550 and score < 650
        'face-med.png'
      elsif score >= 650 and score < 750
        'face-nice.png'
      else
        'face-good.png'
      end
    else
      'face-bad.png'
    end
  end

  def get_history_payments account



    first_date = account['FechaMasAntiguaHistoricoPagos'].last(4).to_i
    first_month = account['FechaMasAntiguaHistoricoPagos'][2,2]
    last_date = account['FechaMasRecienteHistoricoPagos'].last(4).to_i
    last_month = account['FechaMasRecienteHistoricoPagos'][2,2]
    total_year = (last_date - first_date) + 1

    payment_history = account['HistoricoPagos']

    months = (1..12).to_a

    array = {}

    new_date = first_date
    total_year.times do |year|
      array["#{new_date}"] = []

      months.each do |month|


        if new_date == first_date && month <= first_month.to_i
          array["#{new_date}"].push({"value": 0})
        elsif new_date == first_date && month >= first_month.to_i
          if payment_history[0].present?
            array["#{new_date}"].push({"value": payment_history[0]})
            payment_history.slice!(0)
          else
            array["#{new_date}"].push({"value": 0})

          end

        elsif new_date == last_month && month <= last_month.to_i
          if payment_history[0].present?
            array["#{new_date}"].push({"value": payment_history[0]})
            payment_history.slice!(0)
          else
            array["#{new_date}"].push({"value": 0})
          end
        else
          if payment_history[0].present?
            array["#{new_date}"].push({"value": payment_history[0]})
            payment_history.slice!(0)
          else
            array["#{new_date}"].push({"value": 0})
          end
        end
      end

      new_date = new_date.to_i + 1


    end

    return array

  end

  def render_status_by_class status
    case status
    when 'aprobada'
      "st-green"
    when 'pendiente'
      "st-blue"
    when "rechazada"
      "st-red"
    else
      "st-gray"
    end
  end

  def render_quantity_h number
    number_to_human(number,format:'%n%u',units:{thousand:'K',million:'M',billion:'B'})
  end

  def generate_pdf_name type, company_id
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
