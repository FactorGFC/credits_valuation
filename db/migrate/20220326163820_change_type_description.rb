class ChangeTypeDescription < ActiveRecord::Migration[6.1]
  def up
    change_table :blogs do |t|
      t.change :description, :text
    end
  end

  def down
    change_table :blogs do |t|
      t.change :description, :string
    end
  end
end
