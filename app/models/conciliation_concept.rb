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
class ConciliationConcept < ApplicationRecord
end
