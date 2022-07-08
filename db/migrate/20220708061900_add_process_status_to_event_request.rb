class AddProcessStatusToEventRequest < ActiveRecord::Migration[6.1]
  def change
    add_reference :event_requests, :process_status, foreign_key: true
  end
end
