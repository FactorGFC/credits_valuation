class AddJsonBToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :info_company_2, :jsonb
    add_column :companies, :credential_company_2, :jsonb
  end
end
