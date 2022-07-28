class AddProvidersToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :providers, :jsonb
    add_column :companies, :customers, :jsonb
  end
end
