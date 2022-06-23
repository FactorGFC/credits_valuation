class AddAssignToToCompanyCalendarDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :company_calendar_details, :assign_to, :string
  end
end
