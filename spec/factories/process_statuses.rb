# == Schema Information
#
# Table name: process_statuses
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  key        :string
#  name       :string
#  order      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :process_status do
    name "MyString"
    key "MyString"
    order 1
    active false
  end
end
