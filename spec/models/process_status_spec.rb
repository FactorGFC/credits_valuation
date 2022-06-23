# == Schema Information
#
# Table name: process_statuses
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  key        :string
#  name       :string
#  order      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe ProcessStatus, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
