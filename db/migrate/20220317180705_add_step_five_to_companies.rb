class AddStepFiveToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :step_five, :boolean
    add_column :companies, :step_six, :boolean
  end
end
