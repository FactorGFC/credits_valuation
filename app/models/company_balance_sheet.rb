# == Schema Information
#
# Table name: company_balance_sheets
#
#  id                 :bigint           not null, primary key
#  value              :string
#  year               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  balance_concept_id :bigint           not null
#  company_id         :bigint           not null
#
# Indexes
#
#  index_company_balance_sheets_on_balance_concept_id  (balance_concept_id)
#  index_company_balance_sheets_on_company_id          (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (balance_concept_id => balance_concepts.id)
#  fk_rails_...  (company_id => companies.id)
#
class CompanyBalanceSheet < ApplicationRecord
  #has_one :company
end
