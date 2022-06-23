json.extract! request_comment, :id, :created_at, :updated_at
json.url request_comment_url(request_comment, format: :json)
