class CreateIncomeStatementConcepts < ActiveRecord::Migration[6.1]
  def change
    create_table :income_statement_concepts do |t|
      t.string :name
      t.string :key
      t.integer :number_key
      t.string :name_key
      t.boolean :active
      t.boolean :capturable
      t.string :ancestry

      t.timestamps
    end
    add_index :income_statement_concepts, :ancestry
  end
end
