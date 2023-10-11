# == Schema Information
#
# Table name: events
#
#  id             :bigint           not null, primary key
#  agreements     :text
#  description    :string
#  end_date       :datetime
#  event_finished :boolean
#  event_type     :string
#  location       :string
#  start_date     :datetime
#  title          :string
#  url            :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Event < ApplicationRecord
  validates_presence_of :title

  has_one :event_detail
end
