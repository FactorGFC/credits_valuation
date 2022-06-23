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
FactoryBot.define do
  factory :event do
    start_date "2022-06-15 12:37:24"
    end_date "2022-06-15 12:37:24"
    text "MyString"
  end
end
