# == Schema Information
#
# Table name: event_requests
#
#  id         :bigint           not null, primary key
#  comment    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :bigint           not null
#  request_id :bigint           not null
#
# Indexes
#
#  index_event_requests_on_event_id    (event_id)
#  index_event_requests_on_request_id  (request_id)
#
# Foreign Keys
#
#  fk_rails_...  (event_id => events.id)
#  fk_rails_...  (request_id => requests.id)
#
require 'rails_helper'

RSpec.describe EventRequest, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
