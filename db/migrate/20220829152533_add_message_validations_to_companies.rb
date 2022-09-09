class AddMessageValidationsToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :welcome_message, :boolean
    add_column :companies, :confirmation_message, :boolean
  end
end
