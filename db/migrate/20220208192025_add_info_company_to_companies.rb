class AddInfoCompanyToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :info_company, :text
  end
end
