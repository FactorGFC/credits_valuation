class CreateCalendarYears < ActiveRecord::Migration[6.0]
  def change
    create_table :calendar_years do |t|
      t.string :name
      t.string :year
      t.boolean :active

      t.timestamps
    end
  end
end
