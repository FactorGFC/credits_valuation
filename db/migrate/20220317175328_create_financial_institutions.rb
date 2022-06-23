class CreateFinancialInstitutions < ActiveRecord::Migration[6.0]
  def change
    create_table :financial_institutions do |t|
      t.references :company, null: false, foreign_key: true
      t.string :institution
      t.references :credit_type, null: false
      t.string :authorized_line
      t.string :balance
      t.integer :coin
      t.string :warranty
      t.string :rate
      t.datetime :expiration
      t.string :destiny



      t.timestamps
    end
  end
end
