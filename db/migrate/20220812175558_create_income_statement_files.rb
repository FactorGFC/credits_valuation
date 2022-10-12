class CreateIncomeStatementFiles < ActiveRecord::Migration[6.1]
  def change
    create_table :income_statement_files do |t|

      t.references :company, null: false, foreign_key: true
      t.references :company_calendar_detail, null: false, foreign_key: true
      t.string :file_name
      t.string :file_id
      
      t.timestamps
    end
  end
end
