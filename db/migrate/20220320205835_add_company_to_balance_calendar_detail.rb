class AddCompanyToBalanceCalendarDetail < ActiveRecord::Migration[6.0]
  def change
    add_reference :balance_calendar_details, :company, null: true, foreign_key: true
  end
end
