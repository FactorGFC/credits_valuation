class CreateBalanceCalendarDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :balance_calendar_details do |t|
      t.references :balance_concept, null: false, foreign_key: true
      t.references :calendar_year, null: false, foreign_key: true
      t.float :value
      t.string :balance_type
    end
  end
end
