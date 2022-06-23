class CreateFactorCredits < ActiveRecord::Migration[6.1]
  def change
    create_table :factor_credits do |t|
      t.string :name
      t.string :description
      t.boolean :active
      t.integer :order

      t.timestamps
    end
  end
end
