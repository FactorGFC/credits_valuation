class ChangeBlogIdToNullablePositions < ActiveRecord::Migration[6.0]
  def change
    change_column_null :positions, :blog_id, true
  end
end
