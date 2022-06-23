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
#  name_key   :string
#  number_key :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_income_statement_concepts_on_ancestry  (ancestry)
#
class IncomeStatementConcept < ApplicationRecord
  has_ancestry
end
