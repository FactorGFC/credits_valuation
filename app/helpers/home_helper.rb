module HomeHelper
  def calculate_process_status company
    data_count = 0
    data_count += 1 if company.complete?
    data_count += 1 if company.income_statement_finished
    data_count += 1 if company.balance_sheet_finished

    (data_count*100)/4
  end
end
