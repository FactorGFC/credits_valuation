class CreateBlogTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_types do |t|
      t.string :name
    end
  end
end
