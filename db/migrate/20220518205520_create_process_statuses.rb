class CreateProcessStatuses < ActiveRecord::Migration[6.1]
  def change
    create_table :process_statuses do |t|
      t.string :name
      t.string :key
      t.integer :order
      t.boolean :active

      t.timestamps
    end
  end
end
