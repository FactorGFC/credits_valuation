# == Schema Information
#
# Table name: factor_credits
#
#  id          :bigint           not null, primary key
#  active      :boolean
#  description :string
#  name        :string
#  order       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :factor_credit do
    name "MyString"
    description "MyString"
    active false
    order 1
  end
end
