# == Schema Information
#
# Table name: financial_institutions
#
#  id              :bigint           not null, primary key
#  authorized_line :string
#  balance         :string
#  coin            :integer
#  destiny         :string
#  expiration      :datetime
#  institution     :string
#  rate            :string
#  type_contract   :string
#  warranty        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  company_id      :integer          not null
#  credit_type_id  :integer
#
# Indexes
#
#  index_financial_institutions_on_company_id      (company_id)
#  index_financial_institutions_on_credit_type_id  (credit_type_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

class FinancialInstitution < ApplicationRecord
  belongs_to :company
  belongs_to :credit_type, optional: true

  enum coin: [:MXN, :USD, :EUR]
end
