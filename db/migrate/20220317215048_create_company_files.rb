class CreateCompanyFiles < ActiveRecord::Migration[6.0]
  def change
    create_table :company_files do |t|

      t.references :company, null: false, foreign_key: true
      t.string :authorization_name
      t.text :authorization_file
      t.string :id_name
      t.text :id_file
      t.string :constancy_name
      t.text :constancy_file
      t.string :financial_statements_one_name
      t.text :financial_statements_one_file
      t.string :financial_statements_two_name
      t.text :financial_statements_two_file
      t.string :financial_statements_parcial_name
      t.text :financial_statements_parcial_file

      t.timestamps
    end
  end
end
