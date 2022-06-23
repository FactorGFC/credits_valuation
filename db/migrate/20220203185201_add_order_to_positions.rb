class AddOrderToPositions < ActiveRecord::Migration[6.0]
  def change
    add_column :positions, :order, :integer
  end
end
