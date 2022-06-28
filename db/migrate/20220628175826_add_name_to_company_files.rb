class AddNameToCompanyFiles < ActiveRecord::Migration[6.1]
  def change
    add_column :company_files, :name_authorization, :string
    add_column :company_files, :name_id_file, :string
    add_column :company_files, :name_constancy, :string
    add_column :company_files, :name_financial_statements_one, :string
    add_column :company_files, :name_financial_statements_two, :string
    add_column :company_files, :name_financial_statements_parcial, :string
  end
end
