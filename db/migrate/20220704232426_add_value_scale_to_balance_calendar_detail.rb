class AddValueScaleToBalanceCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :balance_calendar_details, :value_scale, :string
  end
end
