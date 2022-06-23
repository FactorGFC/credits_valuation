# == Schema Information
#
# Table name: calendars
#
#  id          :bigint           not null, primary key
#  period      :string
#  period_type :string
#  year        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Calendar < ApplicationRecord
  has_many :company_calendar_details

  def period_name
    "#{ self.period_type.split('_').map(&:capitalize).join(' ') } #{self.period ? self.period.split('_').map(&:capitalize).join(' ') : ''} #{self.year.split('_').map(&:capitalize).join(' ')}"
  end
end
