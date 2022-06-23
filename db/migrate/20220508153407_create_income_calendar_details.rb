class CreateIncomeCalendarDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :income_calendar_details do |t|
      t.references :calendar, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.string     :income_statement_concept_key
      t.float :value

      t.timestamps
    end
  end
end
