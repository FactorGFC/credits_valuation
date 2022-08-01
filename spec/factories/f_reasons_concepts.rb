# == Schema Information
#
# Table name: f_reasons_concepts
#
#  id          :bigint           not null, primary key
#  description :string
#  formula     :string
#  key         :string
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :f_reasons_concept do
    name "MyString"
    key "MyString"
    formula "MyString"
    description "MyString"
  end
end
