class AddInvoicesToCompanyFiles < ActiveRecord::Migration[6.1]
  def change
    add_column :company_files, :invoice_authorization, :string
    add_column :company_files, :invoice_id_file, :string
    add_column :company_files, :invoice_constancy, :string
    add_column :company_files, :invoice_financial_statements_one, :string
    add_column :company_files, :invoice_financial_statements_two, :string
    add_column :company_files, :invoice_financial_statements_parcial, :string
  end
end
