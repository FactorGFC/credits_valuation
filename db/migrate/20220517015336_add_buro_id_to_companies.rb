class AddBuroIdToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :buro_id, :string
  end
end
