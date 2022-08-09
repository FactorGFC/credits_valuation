# == Schema Information
#
# Table name: balance_calendar_details
#
#  id                  :bigint           not null, primary key
#  balance_concept_key :string
#  balance_type        :string
#  value               :float
#  value_scale         :string
#  balance_concept_id  :integer
#  calendar_id         :integer          not null
#  company_id          :bigint
#
# Indexes
#
#  index_balance_calendar_details_on_balance_concept_id  (balance_concept_id)
#  index_balance_calendar_details_on_calendar_id         (calendar_id)
#  index_balance_calendar_details_on_company_id          (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (balance_concept_id => balance_concepts.id)
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#

class BalanceCalendarDetail < ApplicationRecord
  #####
  ##### Los registros que de captura extra guardan balance_concept_id y deja :balance_concept_key en 'nil'
  ##### Los registros que captura el cliente guardan :balance_concept_key y dejan balance_concept_id en 'nil'
  #####

  #belongs_to :company
  belongs_to :calendar
  belongs_to :balance_concept, optional: true
end
