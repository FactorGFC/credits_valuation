# == Schema Information
#
# Table name: calendar_years
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string
#  year       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe CalendarYear, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
