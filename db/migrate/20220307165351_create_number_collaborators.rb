class CreateNumberCollaborators < ActiveRecord::Migration[6.0]
  def change
    create_table :number_collaborators do |t|

      t.references :company, null: false, foreign_key: true
      t.integer :operative
      t.integer :administrative
      t.integer :sales
      t.integer :eventual
      t.integer :unionized
      t.integer :total


      t.timestamps
    end
  end
end
