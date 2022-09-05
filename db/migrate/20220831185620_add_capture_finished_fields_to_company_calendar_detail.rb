class AddCaptureFinishedFieldsToCompanyCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :company_calendar_details, :capture_finished, :boolean
  end
end
