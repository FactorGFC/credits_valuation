# == Schema Information
#
# Table name: request_comments
#
#  id                :bigint           not null, primary key
#  comment           :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  analyst_id        :integer
#  process_status_id :bigint           not null
#  request_id        :bigint           not null
#  user_id           :integer
#
# Indexes
#
#  index_request_comments_on_process_status_id  (process_status_id)
#  index_request_comments_on_request_id         (request_id)
#
# Foreign Keys
#
#  fk_rails_...  (process_status_id => process_statuses.id)
#  fk_rails_...  (request_id => requests.id)
#
class RequestComment < ApplicationRecord
  belongs_to :process_status
end
