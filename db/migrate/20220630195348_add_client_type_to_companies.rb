class AddClientTypeToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :client_type, :string
  end
end
