# == Schema Information
#
# Table name: credit_bureaus
#
#  id            :bigint           not null, primary key
#  bureau_info   :jsonb
#  bureau_report :jsonb
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  bureau_id     :integer
#  company_id    :bigint           not null
#
# Indexes
#
#  index_credit_bureaus_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#
class CreditBureau < ApplicationRecord
end
