class AddFieldsForConfirmationToCompany < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :buro_confirmation_code, :integer
    add_column :companies, :bufo_confirmation_date, :datetime
    add_column :companies, :forwarded_code,         :boolean
  end
end
