class AddCapturableToBalanceConcepts < ActiveRecord::Migration[6.1]
  def change
    add_column :balance_concepts, :capturable, :boolean
  end
end
