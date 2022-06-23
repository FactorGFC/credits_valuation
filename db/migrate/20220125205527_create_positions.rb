class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :name
      t.references :blog, null: false, foreign_key: true
    end
  end
end
