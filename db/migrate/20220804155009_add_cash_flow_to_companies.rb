class AddCashFlowToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :cash_flow, :jsonb
  end
end
