class CreateCalendars < ActiveRecord::Migration[6.1]
  def change
    create_table :calendars do |t|
      t.string :period_type
      t.string :year
      t.string :period

      t.timestamps
    end
  end
end
