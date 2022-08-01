class CreateFReasonsCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :f_reasons_companies do |t|
      t.references :company, null: false, foreign_key: true
      t.references :f_reasons_concept, null: false, foreign_key: true
      t.references :calendar, null: false, foreign_key: true
      t.integer    :capture_type, null: false, foreign_key: true
      t.float :value

      t.timestamps
    end
  end
end
