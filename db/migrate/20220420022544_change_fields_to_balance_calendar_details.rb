class ChangeFieldsToBalanceCalendarDetails < ActiveRecord::Migration[6.1]
  def change
    rename_column :balance_calendar_details, :calendar_year_id, :calendar_id
  end
end
