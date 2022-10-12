class AddCaptureTypeToCompanyFlow < ActiveRecord::Migration[6.1]
  def change
    add_column :company_flows, :capture_type, :integer
  end
end
