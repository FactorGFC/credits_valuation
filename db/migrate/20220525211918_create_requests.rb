class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.references :company, null: false, foreign_key: true
      t.references :credit_type, null: false, foreign_key: true
      t.references :process_status, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :analyst, foreign_key: { to_table: 'users'}
      t.timestamps
    end
    #add_reference :requests, :analyst, foreign_key: { to_table: 'users' }

  end
end
