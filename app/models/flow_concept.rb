# == Schema Information
#
# Table name: flow_concepts
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  key        :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class FlowConcept < ApplicationRecord
end
