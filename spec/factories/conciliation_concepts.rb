# == Schema Information
#
# Table name: conciliation_concepts
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  key        :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :conciliation_concept do
    name "MyString"
    key "MyString"
    active false
  end
end
