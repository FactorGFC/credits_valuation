class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.string   :title
      t.string   :description
      t.string   :url
      t.string   :location
      t.string   :event_type
      t.text     :agreements
      t.boolean  :event_finished

      t.timestamps
    end
  end
end
