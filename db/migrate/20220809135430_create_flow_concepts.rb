class CreateFlowConcepts < ActiveRecord::Migration[6.1]
  def change
    create_table :flow_concepts do |t|
      t.string :name
      t.string :key
      t.boolean :active

      t.timestamps
    end
  end
end
