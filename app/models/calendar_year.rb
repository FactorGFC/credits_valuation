# == Schema Information
#
# Table name: calendar_years
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string
#  year       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CalendarYear < ApplicationRecord
  has_many :calendar_year
end
