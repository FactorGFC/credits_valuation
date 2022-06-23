class CreateCompanyCalendarDetail < ActiveRecord::Migration[6.1]
  def change
    create_table :company_calendar_details do |t|
      t.references :company, null: false, foreign_key: true
      t.references :calendar, null: false, foreign_key: true

      t.timestamps
    end
  end
end
