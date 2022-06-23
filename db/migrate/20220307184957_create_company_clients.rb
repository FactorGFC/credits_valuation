class CreateCompanyClients < ActiveRecord::Migration[6.0]
  def change
    create_table :company_clients do |t|
      t.references :company, null: false, foreign_key: true
      t.string :name
      t.string :sales
      t.string :credit

      t.timestamps
    end
  end
end
