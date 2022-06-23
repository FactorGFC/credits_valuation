class AddTypeContractToFinancialInstitutions < ActiveRecord::Migration[6.1]
  def change
    add_column :financial_institutions, :type_contract, :string
    change_column :financial_institutions, :credit_type_id, :integer, :null => true
  end
end
