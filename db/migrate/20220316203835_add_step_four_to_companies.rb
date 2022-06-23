class AddStepFourToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :step_four, :boolean
  end
end
