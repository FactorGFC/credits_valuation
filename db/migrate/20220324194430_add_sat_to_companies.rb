class AddSatToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :cer_encoded, :text
    add_column :companies, :key_encoded, :text
    add_column :companies, :sat_password, :string
  end
end
