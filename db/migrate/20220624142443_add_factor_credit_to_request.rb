class AddFactorCreditToRequest < ActiveRecord::Migration[6.1]
  def change
    remove_column :requests, :credit_type_id
    add_reference :requests, :factor_credit, null: false, foreign_key: true
  end
end
