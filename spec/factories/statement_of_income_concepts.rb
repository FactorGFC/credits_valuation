# == Schema Information
#
# Table name: income_statement_concepts
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  ancestry   :string
#  capturable :boolean
#  key        :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_income_statement_concepts_on_ancestry  (ancestry)
#
FactoryBot.define do
  factory :statement_of_income_concept do
    name "MyString"
    key "MyString"
    active false
    ancestry "MyString"
  end
end
