class AddSatIdToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :sat_id, :string
  end
end
