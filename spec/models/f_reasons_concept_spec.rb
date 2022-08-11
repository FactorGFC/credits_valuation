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
require 'rails_helper'

RSpec.describe FReasonsConcept, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
