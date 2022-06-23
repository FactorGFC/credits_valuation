class AddIncomeStatmentToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :income_statment, :jsonb
  end
end
