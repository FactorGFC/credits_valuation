class FixColumnNameForBlogs < ActiveRecord::Migration[6.0]
    def change
      rename_column :blogs, :descripcion, :description
    end
end
