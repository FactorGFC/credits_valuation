module HomeHelper
  def calculate_process_status company
    aux_array    = []
    calendar_ids = company.company_calendar_details.pluck(:calendar_id)
    aux_counter  = 0
    calendar_ids.uniq.each do |calendar_id|
      aux_counter += 1 if company.balance_calendar_details.where(calendar_id: calendar_id).present?
      aux_counter += 1 if company.income_calendar_details.where(calendar_id: calendar_id).present?
    end


    value = calendar_ids.count > 0 ? (aux_counter*100)/calendar_ids.count : 0
    aux_array = [value, "#{aux_counter}/#{calendar_ids.count}"]
    return aux_array
  end
end
