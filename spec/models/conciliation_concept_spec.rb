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
require 'rails_helper'

RSpec.describe ConciliationConcept, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
