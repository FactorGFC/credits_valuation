# == Schema Information
#
# Table name: events
#
#  id             :bigint           not null, primary key
#  agreements     :text
#  description    :string
#  end_date       :datetime
#  event_finished :boolean
#  event_type     :string
#  location       :string
#  start_date     :datetime
#  title          :string
#  url            :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
