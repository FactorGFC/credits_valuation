class AddRefactorJsonBToCompanies < ActiveRecord::Migration[6.0]
  def change
    remove_column :companies, :info_company
    remove_column :companies, :credential_company
    remove_column :companies, :info_company_2
    remove_column :companies, :credential_company_2

    add_column :companies, :info_company, :jsonb
    add_column :companies, :credential_company, :jsonb

  end
end
