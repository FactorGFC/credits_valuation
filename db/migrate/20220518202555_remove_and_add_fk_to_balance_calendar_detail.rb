class RemoveAndAddFkToBalanceCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :balance_calendar_details, column: :calendar_id
    add_foreign_key :balance_calendar_details, :calendars
  end
end
