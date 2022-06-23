class CreateStatusCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :status_companies do |t|

      t.string :name
      t.string :description
      t.string :key

      t.timestamps
    end
  end
end
