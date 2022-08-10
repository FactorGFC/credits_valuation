# == Schema Information
#
# Table name: income_calendar_details
#
#  id                           :bigint           not null, primary key
#  extra_data                   :boolean
#  income_statement_concept_key :string
#  value                        :float
#  value_scale                  :string
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  calendar_id                  :bigint           not null
#  company_id                   :bigint           not null
#  income_statement_concept_id  :bigint
#
# Indexes
#
#  index_income_calendar_details_on_calendar_id                  (calendar_id)
#  index_income_calendar_details_on_company_id                   (company_id)
#  index_income_calendar_details_on_income_statement_concept_id  (income_statement_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (income_statement_concept_id => income_statement_concepts.id)
#
class IncomeCalendarDetail < ApplicationRecord
  belongs_to :calendar
  belongs_to :calendar
  belongs_to :income_statement_concept, optional: true
end
