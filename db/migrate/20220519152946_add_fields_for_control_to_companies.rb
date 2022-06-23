class AddFieldsForControlToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :group_company, :boolean
    add_column :companies, :balance_sheet_finished, :boolean
    add_column :companies, :income_statement_finished, :boolean
  end
end
