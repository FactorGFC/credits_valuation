#Console: include Rails.application.helpers

module CompaniesHelper
  #Valores obtenido de satws de balance
  def company_balance_sheet_value(company_id, calendar, number_key, value_scale)
    company_bs = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)

    if company_bs.present?
      if value_scale === 'millones'
        return (company_bs/1000000).round(2)
      elsif value_scale === 'miles'
        return (company_bs/1000).round(2)
      else
        return company_bs.round(2)
      end
    else
      return 0
    end
  end

  #Valor capturado en FG de balance
  def balance_calendar_detail_value(company_id, calendar, number_key, value_scale)
    balance_cd = BalanceCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, balance_concept_key: number_key).try(:first).try(:value)
    if balance_cd.present?
=begin
      if value_scale === 'millones'
        return (balance_cd/1000000).round(2)
      elsif value_scale === 'miles'
        return (balance_cd/1000).round(2)
      else
        return balance_cd.round(2)
      end
=end
      return balance_cd.round(2)
    else
      return 0
    end
  end

  def calculate_percent_of_total(value, total)
    if value.present? and value != 0 and total and total != 0
      ((value*100)/total).round
    else
      0
    end
  end

  #Valor obtenido de satws para estado de resultados
  def company_income_stat_value(company_id, calendar, number_key, value_scale)
    company_is = CompanyIncomeStatement.where(company_id: company_id, year: calendar.year, income_statement_concept_id: IncomeStatementConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)
    if company_is.present?
      if value_scale === 'millones'
        return (company_is/1000000).round(2)
      elsif value_scale === 'miles'
        return (company_is/1000).round(2)
      else
        return company_is.round(2)
      end
    else
      return 0
    end
  end

  #Valor capturado en FG para estado de resultados
  def income_calendar_detail_value(company_id, calendar, number_key, value_scale)
    income_cs = IncomeCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, income_statement_concept_key: number_key).try(:first).try(:value)
    if income_cs.present?
=begin
      if value_scale === 'millones'
        return (income_cs/1000000).round(2)
      elsif value_scale === 'miles'
        return (income_cs/1000).round(2)
      else
        return income_cs.round(2)
      end
=end
      return income_cs.round(2)
    else
      return 0
    end
  end

  #Calculo de porcentaje de diferencia entre valores y render de badge
  def calculate_percentage(type, company_id, calendar, number_key, value_scale)
    if type === 'balance_sheet'
      sat_value = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f).abs
      fg_value  = BalanceCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, balance_concept_key: number_key).try(:first).try(:value).to_f.abs
    else
      sat_value = CompanyIncomeStatement.where(company_id: company_id, year: calendar.year, income_statement_concept_id: IncomeStatementConcept.where(number_key: number_key, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f).abs
      fg_value  = IncomeCalendarDetail.where(company_id: company_id, calendar_id:  calendar.id, income_statement_concept_key: number_key).try(:first).try(:value).to_f.abs
    end

    if value_scale === 'millones'
      sat_value = sat_value/1000000
      fg_value  = fg_value/1000000
    elsif value_scale === 'miles'
      sat_value = sat_value/1000
      fg_value  = fg_value/1000
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

  #Calcula sumatoria de valores capturados
  def bs_capture_sum company_id, bs_keys_array, calendar_id, value_scale
    total = BalanceCalendarDetail.where(company_id: company_id, balance_concept_key: bs_keys_array, calendar_id: calendar_id).sum(:value)
=begin
    if value_scale === 'millones'
      total/1000000
    elsif value_scale === 'miles'
      total/1000
    else
      total
    end
=end
    return total.round(2)
  end

  #Calcula sumatoria para activo fijo
  def bs_activo_fijo company_id, bs_keys_array, calendar_id, value_scale
    total = BalanceCalendarDetail.where(company_id: company_id, balance_concept_key: bs_keys_array, calendar_id: calendar_id).sum(:value)
    depreciacion = BalanceCalendarDetail.where(company_id: company_id, balance_concept_key: 7, calendar_id: calendar_id).first.try(:value)
=begin
    if value_scale === 'millones'
      total/1000000
    elsif value_scale === 'miles'
      total/1000
    else
      total
    end
=end
    return (total-depreciacion).round(2)
  end

  #Calcula sumatoria para activo fijo
  def bs_activo_fijo_sat company_id, bs_keys_array, calendar, value_scale
    total = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: bs_keys_array, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)
    depreciacion = CompanyBalanceSheet.where(company_id: company_id, year: calendar.year, balance_concept_id: BalanceConcept.where(number_key: 7, capturable: true).pluck(:id)).pluck(:value).sum(&:to_f)
=begin
    if value_scale === 'millones'
      total/1000000
    elsif value_scale === 'miles'
      total/1000
    else
      total
    end
=end
    return (total-depreciacion).round(2)
  end

  #Operacion de prueba para razónes fiscales
  def calcular_crecimiento_ventas period, income_year1, income_year0, inflation, income_scale
    if income_year0 != 0 and income_year0
      #Año 1 es referente al año del row actual, el 0 es del año anterior
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        income_year1 = income_year1*1000000
        income_year0 = income_year0*1000000
      elsif income_scale === 'miles'
        income_year1 = income_year1*1000
        income_year0 = income_year0*1000
      else
        income_year1 = income_year1
        income_year0 = income_year0
      end

      if income_year0.nil?
        value = 0.0
      else
        if inflation.present?
          value = ((income_year1*(12/months))/ (income_year0*(1+(inflation/100))))-1
        else
          value = ((income_year1*(12/months))/ income_year0 )-1
        end
        value = 0 if value.nan?
      end

      return (value*100).round(1)
    else
      return 0
    end
  end

  def calcular_rotacion_activos period, income_year1, total_active1, total_active0, income_scale, balance_scale
    if total_active0
      #Año 1 es referente al año del row actual, el 0 es del año anterior
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        income_year1 = income_year1*1000000
      elsif income_scale === 'miles'
        income_year1 = income_year1*1000
      else
        income_year1 = income_year1
      end

      if balance_scale === 'millones'
        total_active1 = total_active1*1000000
        total_active0 = total_active0*1000000
      elsif balance_scale === 'miles'
        total_active1 = total_active1*1000
        total_active0 = total_active0*1000
      else
        total_active1 = total_active1
        total_active0 = total_active0
      end

      value = ((income_year1/months)*12)/((total_active1+total_active0)/2)
      return value.round(2)
    else
      return 0
    end
  end

  def calcular_margen_operativo total_active, gross_profit, income_scale, balance_scale
    if total_active and total_active != 0
      if income_scale === 'millones'
        gross_profit = gross_profit*1000000
      elsif income_scale === 'miles'
        gross_profit = gross_profit*1000
      else
        gross_profit = gross_profit
      end

      if balance_scale === 'millones'
        total_active = total_active*1000000
      elsif balance_scale === 'miles'
        total_active = total_active*1000
      else
        total_active = total_active
      end

      value = total_active > 0 ? gross_profit/total_active : 0
      return (value*100).round(1)
    else
      return 0.0
    end
  end

  def calcular_rentabilidad_base_capital period, net_profit, total_capital0, total_capital1, income_scale, balance_scale
    if total_capital0
      #1 es referente al año del row actual, el 0 es del año anterior
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        net_profit = net_profit*1000000
      elsif income_scale === 'miles'
        net_profit = net_profit*1000
      else
        net_profit = net_profit
      end

      if balance_scale === 'millones'
        total_capital0 = total_capital0*1000000
        total_capital1 = total_capital1*1000000
      elsif balance_scale === 'miles'
        total_capital0 = total_capital0*1000
        total_capital1 = total_capital1*1000
      else
        total_capital0 = total_capital0
        total_capital1 = total_capital1
      end

      value = ((net_profit/months)*12)/((total_capital0+total_capital1)/2)
      return (value*100).round(1)
    else
      return 0
    end
  end

  def calcular_margen_neto period, net_profit, total_active, income_scale, balance_scale
    if total_active != 0
      #1 es referente al año del row actual, el 0 es del año anterior
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        net_profit = net_profit*1000000
      elsif income_scale === 'miles'
        net_profit = net_profit*1000
      else
        net_profit = net_profit
      end

      if balance_scale === 'millones'
        total_active = total_active*1000000
      elsif balance_scale === 'miles'
        total_active = total_active*1000
      else
        total_active = total_active
      end

      value = (net_profit/total_active)
      return (value*100).round(1)
    else
      return 0
    end
  end

  def calcular_razon_circulante period, activo_circulante, pasivo_circ, income_scale, balance_scale
    if pasivo_circ != 0
      #pasivo_circ se está obteniento del pasivo total
      if balance_scale === 'millones'
        activo_circulante = activo_circulante*1000000
        pasivo_circ = pasivo_circ*1000000
      elsif balance_scale === 'miles'
        activo_circulante = activo_circulante*1000
        pasivo_circ = pasivo_circ*1000
      else
        activo_circulante = activo_circulante
        pasivo_circ = pasivo_circ
      end

      value = activo_circulante/pasivo_circ
      return (value).round(2)
    else
      return 0
    end
  end

  def calcular_prueba_acido period, activo_circulante, pasivo_circ, inventarios, income_scale, balance_scale
    if pasivo_circ != 0
      #pasivo_circ se está obteniento del pasivo total
      if balance_scale === 'millones'
        activo_circulante = activo_circulante*1000000
        pasivo_circ = pasivo_circ*1000000
        inventarios = inventarios*1000000
      elsif balance_scale === 'miles'
        activo_circulante = activo_circulante*1000
        pasivo_circ = pasivo_circ*1000
        inventarios = inventarios*1000
      else
        activo_circulante = activo_circulante
        pasivo_circ = pasivo_circ
        inventarios = inventarios
      end

      value = (activo_circulante-inventarios)/pasivo_circ
      return (value).round(2)
    else
      return 0
    end
  end

  def calcular_pasTotal_capContable total_pasive, total_capital, balance_scale
    if total_pasive != 0
      if balance_scale === 'millones'
        total_pasive = total_pasive*1000000
        total_capital = total_capital*1000000
      elsif balance_scale === 'miles'
        total_pasive = total_pasive*1000
        total_capital = total_capital*1000
      else
        total_pasive = total_pasive
        total_capital = total_capital
      end

      value = (total_pasive)/total_capital
      return (value).round(2)
    else
      return 0
    end
  end

  def calcular_client_days period, clients, income_vts, income_scale, balance_scale
    if income_vts != 0
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        income_vts = income_vts*1000000
      elsif income_scale === 'miles'
        income_vts = income_vts*1000
      else
        income_vts = income_vts
      end

      if balance_scale === 'millones'
        clients = clients*1000000
      elsif balance_scale === 'miles'
        clients = clients*1000
      else
        clients = clients
      end

      value = (clients/income_vts)*(months*30)
      return value.round
    else
      return 0
    end
  end

  def calcular_inventory_days period, inventory, sales_costs, income_scale, balance_scale
    if sales_costs != 0
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        sales_costs = sales_costs*1000000
      elsif income_scale === 'miles'
        sales_costs = sales_costs*1000
      else
        sales_costs = sales_costs
      end

      if balance_scale === 'millones'
        inventory = inventory*1000000
      elsif balance_scale === 'miles'
        inventory = inventory*1000
      else
        inventory = inventory
      end

      value = (inventory*30*months)/sales_costs
      return value
    else
      return 0
    end
  end

  def calcular_provider_days period, providers, payable_conts_fop, sales_costs, income_scale, balance_scale
    if sales_costs != 0
      if period == 'anual'
        months = 12
      elsif period === 'trimestral'
        months = 3
      else
        months = 1
      end

      if income_scale === 'millones'
        sales_costs = sales_costs*1000000
      elsif income_scale === 'miles'
        sales_costs = sales_costs*1000
      else
        sales_costs = sales_costs
      end

      if balance_scale === 'millones'
        providers = providers*1000000
        payable_conts_fop = payable_conts_fop*1000000
      elsif balance_scale === 'miles'
        providers = providers*1000
        payable_conts_fop = payable_conts_fop*1000
      else
        providers = providers
        payable_conts_fop = payable_conts_fop
      end

      value = ((providers+payable_conts_fop)/sales_costs)*(months*30)
      return value.round(1)
    else
      return 0
    end
  end

  def calculate_financial_cycle client_days, inventory_days, provider_days
    value = client_days + inventory_days - provider_days
    return value.round(1)
  end

  def calculate_investment_in_work clients, ctas_x_cob_fop, inventory, providers, ctas_x_pag_fop, balance_scale
    if balance_scale === 'millones'
      clients = clients*1000000
      ctas_x_cob_fop = ctas_x_cob_fop*1000000
      inventory = inventory*1000000
      providers = providers*1000000
      ctas_x_pag_fop = ctas_x_pag_fop*1000000
    elsif balance_scale === 'miles'
      clients = clients*1000
      ctas_x_cob_fop = ctas_x_cob_fop*1000
      inventory = inventory*1000
      providers = providers*1000
      ctas_x_pag_fop = ctas_x_pag_fop*1000
    else
      providers = providers
      clients = clients
      ctas_x_cob_fop = ctas_x_cob_fop
      inventory = inventory
      providers = providers
      ctas_x_pag_fop = ctas_x_pag_fop
    end

    value = clients + ctas_x_cob_fop + inventory - providers - ctas_x_pag_fop
    return value.round
  end

  def calculate_interest_coverage utility_op, dep_y_amort, financial_expense, income_scale
    if income_scale === 'millones'
      utility_op = utility_op*1000000
      dep_y_amort = dep_y_amort*1000000
      financial_expense = financial_expense*1000000
    elsif income_scale === 'miles'
      utility_op = utility_op*1000
      dep_y_amort = dep_y_amort*1000
      financial_expense = financial_expense*1000
    else
      utility_op = utility_op
      dep_y_amort = dep_y_amort
      financial_expense = financial_expense
    end

    if financial_expense == 0
      financial_expense = 1
    end
    value = (utility_op+dep_y_amort)/financial_expense
    return value.round(2)
  end

  def calculate_debt_coverage utility_op, porc_circl_y_otros_pas, financial_expense, income_scale, balance_scale
    if income_scale === 'millones'
      utility_op = utility_op*1000000
      financial_expense = financial_expense*1000000
    elsif income_scale === 'miles'
      utility_op = utility_op*1000
      financial_expense = financial_expense*1000
    else
      utility_op = utility_op
      financial_expense = financial_expense
    end

    if balance_scale === 'millones'
      porc_circl_y_otros_pas = porc_circl_y_otros_pas*1000000
    elsif balance_scale === 'miles'
      porc_circl_y_otros_pas = porc_circl_y_otros_pas*1000
    else
      porc_circl_y_otros_pas = porc_circl_y_otros_pas
    end

    if financial_expense == 0 and porc_circl_y_otros_pas == 0
      sum2_div = 1
    else
      sum2_div = financial_expense + porc_circl_y_otros_pas
    end
    value = utility_op/sum2_div
    return value.round(1)
  end

  def calculate_finantial_lp period, utility_op, dep_y_amort, bancos_lp_otros_pas, other_pas, income_scale, balance_scale
    if period == 'anual'
      months = 12
    elsif period === 'trimestral'
      months = 3
    else
      months = 1
    end

    if income_scale === 'millones'
      utility_op = utility_op*1000000
      dep_y_amort = dep_y_amort*1000000
    elsif income_scale === 'miles'
      utility_op = utility_op*1000
      dep_y_amort = dep_y_amort*1000
    else
      utility_op = utility_op
      dep_y_amort = dep_y_amort
    end

    if balance_scale === 'millones'
      bancos_lp_otros_pas = bancos_lp_otros_pas*1000000
      other_pas = other_pas*1000000
    elsif balance_scale === 'miles'
      bancos_lp_otros_pas = bancos_lp_otros_pas*1000
      other_pas = other_pas*1000
    else
      bancos_lp_otros_pas = bancos_lp_otros_pas
      other_pas = other_pas
    end

    sum2_div = utility_op + dep_y_amort

    if sum2_div < 0
      return 'UAFIRDA Neg.'
    elsif sum2_div == 0
      return 0
    else
      value = (bancos_lp_otros_pas+other_pas)/(((utility_op+dep_y_amort)/months)*12)
      return value.round(2)
    end
  end

  def calculate_finantial_total period, utility_op, dep_y_amort, bancos_lp_otros_pas, other_pas, income_scale, balance_scale
    if period == 'anual'
      months = 12
    elsif period === 'trimestral'
      months = 3
    else
      months = 1
    end

    if income_scale === 'millones'
      utility_op = utility_op*1000000
      dep_y_amort = dep_y_amort*1000000
    elsif income_scale === 'miles'
      utility_op = utility_op*1000
      dep_y_amort = dep_y_amort*1000
    else
      utility_op = utility_op
      dep_y_amort = dep_y_amort
    end

    if balance_scale === 'millones'
      bancos_lp_otros_pas = bancos_lp_otros_pas*1000000
      other_pas = other_pas*1000000
    elsif balance_scale === 'miles'
      bancos_lp_otros_pas = bancos_lp_otros_pas*1000
      other_pas = other_pas*1000
    else
      bancos_lp_otros_pas = bancos_lp_otros_pas
      other_pas = other_pas
    end

    sum2_div = utility_op + dep_y_amort

    if sum2_div < 0
      return 'UAFIRDA Neg.'
    elsif sum2_div == 0
      return 0
    else
      value = (bancos_lp_otros_pas+other_pas)/(((utility_op+dep_y_amort)/months)*12)
      return value.round(2)
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
    p "account ------------------------------------------------------------"
    p account

    Rails.logger.info "account logger ------------------------------------------------------------"
    Rails.logger.info account
    array = {}

    if account['FechaMasAntiguaHistoricoPagos'].present?

      first_date = account['FechaMasAntiguaHistoricoPagos'].last(4).to_i
      first_month = account['FechaMasAntiguaHistoricoPagos'][2,2]
      if account['FechaMasRecienteHistoricoPagos'].present?
        last_date = account['FechaMasRecienteHistoricoPagos'].last(4).to_i
        last_month = account['FechaMasRecienteHistoricoPagos'][2,2]
      else
        last_date = DateTime.now.year
        last_month = DateTime.now.month
      end
      total_year = (last_date - first_date) + 1

      payment_history = account['HistoricoPagos']

      months = (1..12).to_a



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

    end
    return array

  end

  def get_history_payments_pm account

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

  def get_ur_credits credits
    ur_credits = {mop: 'UR', cuentas_abiertas: 0, limite_abiertas: 0, maximo_abiertas: 0, saldo_actual: 0, 
                  saldo_vencido: 0, pago_realizar: 0, cuentas_cerradas: 0, limite_cerradas: 0, maximo_cerradas: 0, 
                  saldo_cerradas: 0, monto_cerradas: 0}

    credits_01 = {mop: '01',cuentas_abiertas: 0, limite_abiertas: 0, maximo_abiertas: 0, saldo_actual: 0, saldo_vencido: 0, 
                  pago_realizar: 0, cuentas_cerradas: 0, limite_cerradas: 0, maximo_cerradas: 0, saldo_cerradas: 0, 
                  monto_cerradas: 0}

    
    all_credits = []


    credits.each do |credit|


      if credit['FechaCierreCuenta'].present? && credit['FormaPagoActual'] == 'UR'

        ur_credits[:cuentas_cerradas] += 1
        ur_credits[:limite_cerradas] += credit['LimiteCredito'].to_i
        ur_credits[:maximo_cerradas] += credit['CreditoMaximo'].to_i
        ur_credits[:saldo_cerradas] += credit['SaldoActual'].to_i
        ur_credits[:monto_cerradas] += credit['MontoPagar'].to_i

      elsif credit['FechaCierreCuenta'].present? && credit['FormaPagoActual'] == '01'

        credits_01[:cuentas_cerradas] += 1
        credits_01[:limite_cerradas] += credit['LimiteCredito'].to_i
        credits_01[:maximo_cerradas] += credit['CreditoMaximo'].to_i
        credits_01[:saldo_cerradas] += credit['SaldoActual'].to_i
        credits_01[:monto_cerradas] += credit['MontoPagar'].to_i
        
      elsif !credit['FechaCierreCuenta'].present? && credit['FormaPagoActual'] == 'UR'

        ur_credits[:cuentas_abiertas] += 1
        ur_credits[:limite_abiertas] += credit['LimiteCredito'].to_i
        ur_credits[:maximo_abiertas] += credit['CreditoMaximo'].to_i
        ur_credits[:saldo_actual] += credit['SaldoActual'].to_i
        ur_credits[:saldo_vencido] += credit['SaldoVencido'].to_i
        ur_credits[:pago_realizar] += credit['MontoPagar'].to_i

      elsif !credit['FechaCierreCuenta'].present? && credit['FormaPagoActual'] == '01'
        credits_01[:cuentas_abiertas] += 1
        credits_01[:limite_abiertas] += credit['LimiteCredito'].to_i
        credits_01[:maximo_abiertas] += credit['CreditoMaximo'].to_i
        credits_01[:saldo_actual] += credit['SaldoActual'].to_i
        credits_01[:saldo_vencido] += credit['SaldoVencido'].to_i
        credits_01[:pago_realizar] += credit['MontoPagar'].to_i
      end
    end

    all_credits.push(ur_credits)
    all_credits.push(credits_01)

    return all_credits
  end


  def get_pm_birthdate date
    if date.present?

      day = date.first(2)
      month = get_month date[2,2]
      year = date.last(4)
      new_date = day + '-' + month + '-' + year
    else
      new_date = 'N/D'
    end

    return new_date
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
