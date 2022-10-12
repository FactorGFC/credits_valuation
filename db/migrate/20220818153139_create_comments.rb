class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.references :user, null: false, foreign_key: true
      t.string :assigned_to
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
