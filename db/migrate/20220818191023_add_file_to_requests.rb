class AddFileToRequests < ActiveRecord::Migration[6.1]
  def change
    add_column :requests, :file_id, :string
    add_column :requests, :file_name, :string
  end
end
