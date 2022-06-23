class CreateBalanceConcepts < ActiveRecord::Migration[6.0]
  def change
    create_table :balance_concepts do |t|
      t.string :name
      t.string :key
      t.boolean :active
      t.string :ancestry

      t.timestamps
    end
    add_index :balance_concepts, :ancestry
  end
end
