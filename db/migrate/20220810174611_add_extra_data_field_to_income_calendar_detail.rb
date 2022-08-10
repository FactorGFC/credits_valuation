class AddExtraDataFieldToIncomeCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :income_calendar_details, :extra_data, :boolean
  end
end
