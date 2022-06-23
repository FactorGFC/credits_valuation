class AddStatusToCompany < ActiveRecord::Migration[6.0]
  def change
    add_reference :companies, :status_company, index: true, foreign_key: true
  end
end
