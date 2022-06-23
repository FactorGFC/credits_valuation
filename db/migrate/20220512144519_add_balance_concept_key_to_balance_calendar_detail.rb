class AddBalanceConceptKeyToBalanceCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :balance_calendar_details, :balance_concept_key, :string
    change_column_null(:balance_calendar_details, :balance_concept_id, true)
  end
end
