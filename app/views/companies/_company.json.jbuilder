json.extract! company, :id, :rfc, :address, :name, :created_at, :updated_at
json.url company_url(company, format: :json)
