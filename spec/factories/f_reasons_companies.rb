# == Schema Information
#
# Table name: f_reasons_companies
#
#  id                   :bigint           not null, primary key
#  capture_type         :integer          not null
#  value                :float
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  calendar_id          :bigint           not null
#  company_id           :bigint           not null
#  f_reasons_concept_id :bigint           not null
#
# Indexes
#
#  index_f_reasons_companies_on_calendar_id           (calendar_id)
#  index_f_reasons_companies_on_company_id            (company_id)
#  index_f_reasons_companies_on_f_reasons_concept_id  (f_reasons_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (f_reasons_concept_id => f_reasons_concepts.id)
#
FactoryBot.define do
  factory :f_reasons_company do
    company nil
    f_reasons_concept nil
    calendar nil
    value 1.5
  end
end
