class CreateFReasonsConcepts < ActiveRecord::Migration[6.1]
  def change
    create_table :f_reasons_concepts do |t|
      t.string :name
      t.string :key
      t.string :formula
      t.string :description

      t.timestamps
    end
  end
end
