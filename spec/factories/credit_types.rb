# == Schema Information
#
# Table name: credit_types
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :credit_type do
    name "MyString"
  end
end
