class CreateEventRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :event_requests do |t|
      t.references :event, null: false, foreign_key: true
      t.references :request, null: false, foreign_key: true
      t.text :comment

      t.timestamps
    end
  end
end
