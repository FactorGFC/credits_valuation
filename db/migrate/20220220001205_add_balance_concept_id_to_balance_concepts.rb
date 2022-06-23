class AddBalanceConceptIdToBalanceConcepts < ActiveRecord::Migration[6.0]
  def change
    add_reference :balance_concepts, :balance_concept, foreign_key: true
  end
end
