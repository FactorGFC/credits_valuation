class AddSatToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :sat_id, :string
  end
end
