# == Schema Information
#
# Table name: event_requests
#
#  id                :bigint           not null, primary key
#  comment           :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  event_id          :bigint           not null
#  process_status_id :bigint
#  request_id        :bigint           not null
#
# Indexes
#
#  index_event_requests_on_event_id           (event_id)
#  index_event_requests_on_process_status_id  (process_status_id)
#  index_event_requests_on_request_id         (request_id)
#
# Foreign Keys
#
#  fk_rails_...  (event_id => events.id)
#  fk_rails_...  (process_status_id => process_statuses.id)
#  fk_rails_...  (request_id => requests.id)
#
class EventRequest < ApplicationRecord
  belongs_to :event
  belongs_to :request
  belongs_to :process_status, optional: true
end
