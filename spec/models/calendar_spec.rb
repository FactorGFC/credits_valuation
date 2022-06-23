# == Schema Information
#
# Table name: calendars
#
#  id          :bigint           not null, primary key
#  period      :string
#  period_type :string
#  year        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Calendar, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
