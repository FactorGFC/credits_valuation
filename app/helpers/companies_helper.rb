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
    min_num   = [sat_value, fg_value].min

    if max_num != 0 and min_num != 0
      percent_value = (min_num/(max_num*100)).round(2)
      if percent_value >= 80
        [percent_value, 'green-badge']
      elsif percent_value >= 40 and percent_value < 80
        [percent_value, 'yellow-badge']
      else
        [percent_value, 'red-badge']
      end
    else
      [0, 'red-badge']
    end
  end

  def calculate_degrees percent
     percent.present? ?  (percent * 180)/100 : 0
  end

  def calculate_face percent
    if percent.present?
      if percent < 33
        'face-bad.png'
      elsif percent >= 33 and percent < 66
        'face-med.png'
      else
        'face-good.png'
      end
    else
      'face-good.png'
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

  def get_history_payments_pm account

    p "account ------------------------------------------------"
    p account


    first_date = account['apertura'].last(4).to_i
    first_month = account['apertura'][2,2]
    if account['fechaCierre'].present?

      last_date = account['fechaCierre'].last(4).to_i
      last_month = account['fechaCierre'][2,2]
    else
      last_date = account['ultimoPeriodoActualizado'].first(4).to_i
      last_month = account['ultimoPeriodoActualizado'].last(2).to_i
    end
    total_year = (last_date - first_date) + 1

    payment_history = account['historicoPagos']

    p "payment_history--------------------------------------------------------"
    p payment_history

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

  def get_active_credits actives_credits

    otras_financieras_simple = {otorgante:'OTRAS FINANCIERAS',tipo_credito: 'SIMPLE' ,cuentas_abiertas: 0, cuentas_mxp: 0, cuentas_usd: 0, otras_monedas: 0, original: 0,
                                saldo_actual: 0, vigente: 0, one:0, thirty: 0, sixty: 0,ninety: 0,one_twenty: 0,
                                one_eighty: 0}

    banco_linea_credito = {otorgante:'BANCO',tipo_credito: 'LINEA DE CRÉDITO' , cuentas_abiertas: 0, cuentas_mxp: 0,
                           cuentas_usd: 0, otras_monedas: 0, original: 0, saldo_actual: 0, vigente: 0, one:0, thirty: 0, 
                           sixty: 0,ninety: 0,one_twenty: 0, one_eighty: 0}

    banco_credito_empresarial = {otorgante:'BANCO',tipo_credito: 'T. CRED. EMPRESARIAL-CORPORATIVA',cuentas_abiertas: 0,
                                 cuentas_mxp: 0, cuentas_usd: 0, otras_monedas: 0, original: 0, saldo_actual: 0,
                                 vigente: 0, one:0, thirty: 0, sixty: 0,ninety: 0,one_twenty: 0, one_eighty: 0}

    otras_financieras = {otorgante:'OTRAS FINANCIERAS',tipo_credito: 'O.C. GARANTIA INMOB' , cuentas_abiertas: 0,
                                     cuentas_mxp: 0, cuentas_usd: 0, otras_monedas: 0, original: 0, saldo_actual: 0,
                                     vigente: 0, one:0, thirty: 0, sixty: 0,ninety: 0,one_twenty: 0, one_eighty: 0}


    @actives_credits = []


    actives_credits.each do |active_credit|
      if active_credit['tipoUsuario'] == 'FACTOR GFC GLOBAL' && !active_credit['pagoCierre'].present?


        otras_financieras_simple[:cuentas_abiertas] += 1
        otras_financieras_simple[:cuentas_mxp] += 1
        otras_financieras_simple[:original] += active_credit['saldoInicial'].to_i / 1000
        otras_financieras_simple[:saldo_actual] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras_simple[:vigente] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras_simple[:one] += active_credit['saldoVencidoDe1a29Dias'].to_f
        otras_financieras_simple[:thirty] += active_credit['saldoVencidoDe30a59Dias'].to_f
        otras_financieras_simple[:sixty] += active_credit['saldoVencidoDe60a89Dias'].to_f
        otras_financieras_simple[:ninety] += active_credit['saldoVencidoDe90a119Dias'].to_f
        otras_financieras_simple[:one_twenty] += active_credit['saldoVencidoDe120a179Dias'].to_f
        otras_financieras_simple[:one_eighty] += active_credit['saldoVencidoDe180DiasOMas'].to_f

      elsif active_credit['tipoUsuario'] == 'BANCO' && active_credit['tipoCredito'] == "6280" && !active_credit['pagoCierre'].present?

        banco_linea_credito[:cuentas_abiertas] += 1
        banco_linea_credito[:cuentas_mxp] += 1
        banco_linea_credito[:original] += active_credit['saldoInicial'].to_i / 1000
        banco_linea_credito[:saldo_actual] += active_credit['saldoVigente'].to_i / 1000
        banco_linea_credito[:vigente] += active_credit['saldoVigente'].to_i / 1000
        banco_linea_credito[:one] += active_credit['saldoVencidoDe1a29Dias'].to_f
        banco_linea_credito[:thirty] += active_credit['saldoVencidoDe30a59Dias'].to_f
        banco_linea_credito[:sixty] += active_credit['saldoVencidoDe60a89Dias'].to_f
        banco_linea_credito[:ninety] += active_credit['saldoVencidoDe90a119Dias'].to_f
        banco_linea_credito[:one_twenty] += active_credit['saldoVencidoDe120a179Dias'].to_f
        banco_linea_credito[:one_eighty] += active_credit['saldoVencidoDe180DiasOMas'].to_f

      elsif active_credit['tipoUsuario'] == 'BANCO' && active_credit['tipoCredito'] == "1380" && !active_credit['pagoCierre'].present?

        banco_credito_empresarial[:cuentas_abiertas] += 1
        banco_credito_empresarial[:cuentas_mxp] += 1
        banco_credito_empresarial[:original] += active_credit['saldoInicial'].to_i / 1000
        banco_credito_empresarial[:saldo_actual] += active_credit['saldoVigente'].to_i / 1000
        banco_credito_empresarial[:vigente] += active_credit['saldoVigente'].to_i / 1000
        banco_credito_empresarial[:one] += active_credit['saldoVencidoDe1a29Dias'].to_f
        banco_credito_empresarial[:thirty] += active_credit['saldoVencidoDe30a59Dias'].to_f
        banco_credito_empresarial[:sixty] += active_credit['saldoVencidoDe60a89Dias'].to_f
        banco_credito_empresarial[:ninety] += active_credit['saldoVencidoDe90a119Dias'].to_f
        banco_credito_empresarial[:one_twenty] += active_credit['saldoVencidoDe120a179Dias'].to_f
        banco_credito_empresarial[:one_eighty] += active_credit['saldoVencidoDe180DiasOMas'].to_f
      elsif active_credit['tipoUsuario'] == 'OTRAS FINANCIERAS' && !active_credit['pagoCierre'].present?

        otras_financieras[:cuentas_abiertas] += 1
        otras_financieras[:cuentas_mxp] += 1
        otras_financieras[:original] += active_credit['saldoInicial'].to_i / 1000
        otras_financieras[:saldo_actual] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras[:vigente] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras[:one] += active_credit['saldoVencidoDe1a29Dias'].to_f
        otras_financieras[:thirty] += active_credit['saldoVencidoDe30a59Dias'].to_f
        otras_financieras[:sixty] += active_credit['saldoVencidoDe60a89Dias'].to_f
        otras_financieras[:ninety] += active_credit['saldoVencidoDe90a119Dias'].to_f
        otras_financieras[:one_twenty] += active_credit['saldoVencidoDe120a179Dias'].to_f
        otras_financieras[:one_eighty] += active_credit['saldoVencidoDe180DiasOMas'].to_f

      end
    end

    @actives_credits.push(otras_financieras_simple)
    @actives_credits.push(banco_linea_credito)
    @actives_credits.push(banco_credito_empresarial)
    @actives_credits.push(otras_financieras)

    return @actives_credits

  end

  def get_total_active_credits actives_credits

    otras_financieras_simple = {cuentas_abiertas: 0, cuentas_mxp: 0, cuentas_usd: 0, otras_monedas: 0, original: 0,
                                saldo_actual: 0, vigente: 0, one:0, thirty: 0, sixty: 0,ninety: 0,one_twenty: 0,
                                one_eighty: 0}


    total_actives_credits = []


    actives_credits.each do |active_credit|
      
        otras_financieras_simple[:cuentas_abiertas] += 1
        otras_financieras_simple[:cuentas_mxp] += 1
        otras_financieras_simple[:original] += active_credit['saldoInicial'].to_i / 1000
        otras_financieras_simple[:saldo_actual] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras_simple[:vigente] += active_credit['saldoVigente'].to_i / 1000
        otras_financieras_simple[:one] += active_credit['saldoVencidoDe1a29Dias'].to_f
        otras_financieras_simple[:thirty] += active_credit['saldoVencidoDe30a59Dias'].to_f
        otras_financieras_simple[:sixty] += active_credit['saldoVencidoDe60a89Dias'].to_f
        otras_financieras_simple[:ninety] += active_credit['saldoVencidoDe90a119Dias'].to_f
        otras_financieras_simple[:one_twenty] += active_credit['saldoVencidoDe120a179Dias'].to_f
        otras_financieras_simple[:one_eighty] += active_credit['saldoVencidoDe180DiasOMas'].to_f


    end

    total_actives_credits.push(otras_financieras_simple)

    return total_actives_credits

  end

  def get_date historia

    month = get_month historia.last(2)

    return month + ' ' + historia.first(4)
  end

  def get_month month

    if month == '01'
      name_month = 'Ene'
    elsif month == '02'
      name_month = 'Feb'
    elsif month == '03'
      name_month = 'Mar'
    elsif month == '04'
      name_month = 'Abr'
    elsif month == '05'
      name_month = 'May'
    elsif month == '06'
      name_month = 'Jun'
    elsif month == '07'
      name_month = 'Jul'
    elsif month == '08'
      name_month = 'Ago'
    elsif month == '09'
      name_month = 'Sep'
    elsif month == '10'
      name_month = 'Oct'
    elsif month == '11'
      name_month = 'Nov'
    elsif month == '12'
      name_month = 'Dic'
    end

    return name_month
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
