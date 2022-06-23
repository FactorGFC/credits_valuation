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
FactoryBot.define do
  factory :calendar do
    period_type "MyString"
    string "MyString"
    year "MyString"
    period "MyString"
  end
end
