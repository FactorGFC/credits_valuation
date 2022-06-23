class CreateCompanyIncomeStatement < ActiveRecord::Migration[6.1]
  def change
    create_table :company_income_statements do |t|
      t.references :company, null: false, foreign_key: true
      t.string :year
      t.references :income_statement_concept, null: false, foreign_key: true
      t.string :value

      t.timestamps
    end
  end
end
