# == Schema Information
#
# Table name: company_calendar_details
#
#  id               :bigint           not null, primary key
#  assign_to        :string
#  capture_finished :boolean
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  calendar_id      :bigint           not null
#  company_id       :bigint           not null
#
# Indexes
#
#  index_company_calendar_details_on_calendar_id  (calendar_id)
#  index_company_calendar_details_on_company_id   (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#
class CompanyCalendarDetail < ApplicationRecord
  belongs_to :company
  belongs_to :calendar
end
