json.extract! process_status, :id, :name, :key, :order, :active, :created_at, :updated_at
json.url process_status_url(process_status, format: :json)
