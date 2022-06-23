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

FactoryBot.define do
  factory :calendar_year do
    name "MyString"
    year "MyString"
    active false
  end
end
