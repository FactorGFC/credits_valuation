class AddBlogTypeToPositions < ActiveRecord::Migration[6.0]
  def change
    add_reference :positions, :blog_type, null: true, foreign_key: true
  end
end
