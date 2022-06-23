class AddHasToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :has_providers, :boolean
    add_column :companies, :has_clients, :boolean
  end
end
