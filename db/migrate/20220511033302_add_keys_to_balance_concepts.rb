class AddKeysToBalanceConcepts < ActiveRecord::Migration[6.1]
  def change
    add_column :balance_concepts, :number_key, :integer
    add_column :balance_concepts, :name_key, :string
  end
end
