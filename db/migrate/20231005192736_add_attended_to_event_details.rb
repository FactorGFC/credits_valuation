class AddAttendedToEventDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :event_details, :attended, :boolean
  end
end
