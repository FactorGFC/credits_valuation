class CreateCompanyFlows < ActiveRecord::Migration[6.1]
  def change
    create_table :company_flows do |t|
      t.references :company, null: false, foreign_key: true
      t.references :calendar, null: false, foreign_key: true
      t.references :flow_concept, null: false, foreign_key: true
      t.string :value_scale
      t.float :value

      t.timestamps
    end
  end
end
