class CreateCreditBureaus < ActiveRecord::Migration[6.1]
  def change
    create_table :credit_bureaus do |t|

      t.references :company, null: false, foreign_key: true
      t.integer :bureau_id
      t.jsonb :bureau_info
      t.jsonb :bureau_report

      t.timestamps
    end
  end
end
