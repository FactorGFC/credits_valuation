class AddCredentialCompanyToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :credential_company, :text
  end
end
