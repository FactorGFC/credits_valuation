class AddNewPasswordToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :new_password, :string
  end
end
