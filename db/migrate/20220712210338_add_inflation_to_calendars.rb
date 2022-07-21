class AddInflationToCalendars < ActiveRecord::Migration[6.1]
  def change
    add_column :calendars, :inflation, :float
  end
end
