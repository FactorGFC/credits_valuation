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
require 'rails_helper'

RSpec.describe StatementOfIncomeConcept, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
