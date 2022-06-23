class AddEmployeeNumberToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :employee_number, :string
  end
end
