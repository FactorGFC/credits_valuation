class CreateCompanyConciliations < ActiveRecord::Migration[6.1]
  def change
    create_table :company_conciliations do |t|
      t.references :company, null: false, foreign_key: true
      t.references :calendar, null: false, foreign_key: true
      t.references :conciliation_concept, null: false, foreign_key: true
      t.string :value_scale
      t.float :value

      t.timestamps
    end
  end
end
