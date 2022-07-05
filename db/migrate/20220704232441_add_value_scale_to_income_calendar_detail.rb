class AddValueScaleToIncomeCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :income_calendar_details, :value_scale, :string
  end
end
