# == Schema Information
#
# Table name: income_statement_files
#
#  id                         :bigint           not null, primary key
#  file_name                  :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  company_calendar_detail_id :bigint           not null
#  company_id                 :bigint           not null
#  file_id                    :string
#
# Indexes
#
#  index_income_statement_files_on_company_calendar_detail_id  (company_calendar_detail_id)
#  index_income_statement_files_on_company_id                  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_calendar_detail_id => company_calendar_details.id)
#  fk_rails_...  (company_id => companies.id)
#
require 'rails_helper'

RSpec.describe IncomeStatementFile, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
