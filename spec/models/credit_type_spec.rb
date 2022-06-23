# == Schema Information
#
# Table name: credit_types
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe CreditType, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
