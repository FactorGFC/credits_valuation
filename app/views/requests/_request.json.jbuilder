json.extract! request, :id, :company_id, :credit_type_id, :process_status_id, :user_id, :created_at, :updated_at
json.url request_url(request, format: :json)
