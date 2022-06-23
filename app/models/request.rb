# == Schema Information
#
# Table name: requests
#
#  id                :bigint           not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  analyst_id        :bigint
#  company_id        :bigint           not null
#  credit_type_id    :bigint           not null
#  process_status_id :bigint           not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_requests_on_analyst_id         (analyst_id)
#  index_requests_on_company_id         (company_id)
#  index_requests_on_credit_type_id     (credit_type_id)
#  index_requests_on_process_status_id  (process_status_id)
#  index_requests_on_user_id            (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (analyst_id => users.id)
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (credit_type_id => credit_types.id)
#  fk_rails_...  (process_status_id => process_statuses.id)
#  fk_rails_...  (user_id => users.id)
#
class Request < ApplicationRecord
  belongs_to :company
  belongs_to :credit_type
  belongs_to :process_status
  belongs_to :user
end
