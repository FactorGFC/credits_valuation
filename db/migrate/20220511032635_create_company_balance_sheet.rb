class CreateCompanyBalanceSheet < ActiveRecord::Migration[6.1]
  def change
    create_table :company_balance_sheets do |t|
      t.references :company, null: false, foreign_key: true
      t.string :year
      t.references :balance_concept, null: false, foreign_key: true
      t.string :value

      t.timestamps
    end
  end
end
