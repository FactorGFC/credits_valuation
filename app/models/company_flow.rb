# == Schema Information
#
# Table name: company_flows
#
#  id              :bigint           not null, primary key
#  capture_type    :integer
#  value           :float
#  value_scale     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  calendar_id     :bigint           not null
#  company_id      :bigint           not null
#  flow_concept_id :bigint           not null
#
# Indexes
#
#  index_company_flows_on_calendar_id      (calendar_id)
#  index_company_flows_on_company_id       (company_id)
#  index_company_flows_on_flow_concept_id  (flow_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (flow_concept_id => flow_concepts.id)
#
class CompanyFlow < ApplicationRecord
  belongs_to :calendar
  belongs_to :flow_concept
end
