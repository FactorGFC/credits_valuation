# == Schema Information
#
# Table name: factor_credits
#
#  id          :bigint           not null, primary key
#  active      :boolean
#  description :string
#  name        :string
#  order       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class FactorCredit < ApplicationRecord
end
