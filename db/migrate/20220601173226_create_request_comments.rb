class CreateRequestComments < ActiveRecord::Migration[6.1]
  def change
    create_table :request_comments do |t|
      t.string :comment
      t.integer :analyst_id
      t.integer :user_id
      t.references :process_status, null: false, foreign_key: true
      t.references :request, null: false, foreign_key: true

      t.timestamps
    end
  end
end
