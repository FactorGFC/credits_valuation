class AddExtraDataFieldToBalanceCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :balance_calendar_details, :extra_data, :boolean
  end
end
