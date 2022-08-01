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
class FReasonsConcept < ApplicationRecord
end
