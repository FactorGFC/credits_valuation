# == Schema Information
#
# Table name: balance_concepts
#
#  id                 :bigint           not null, primary key
#  active             :boolean
#  ancestry           :string
#  capturable         :boolean
#  key                :string
#  name               :string
#  name_key           :string
#  number_key         :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  balance_concept_id :bigint
#
# Indexes
#
#  index_balance_concepts_on_ancestry            (ancestry)
#  index_balance_concepts_on_balance_concept_id  (balance_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (balance_concept_id => balance_concepts.id)
#

class BalanceConcept < ApplicationRecord
  has_ancestry
end
