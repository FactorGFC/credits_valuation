class AddBalanceSheetToCompany < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :balance_sheet, :jsonb
  end
end
