class AddStepsToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :complete, :boolean
    add_column :companies, :step_one, :boolean
    add_column :companies, :step_two, :boolean
    add_column :companies, :step_three, :boolean
    add_column :companies, :main_activity, :string
    add_column :companies, :main_products, :string
  end
end
