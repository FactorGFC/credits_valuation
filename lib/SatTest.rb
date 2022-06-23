# require 'net/http'
# require 'uri'
# require 'json'
#
# uri = URI.parse("https://api.sandbox.satws.com/credentials")
#
# request = Net::HTTP::Post.new(uri.request_uri)
#
# request.content_type = "application/json"
# request["X-API-Key"] = "6f59423beb92df5571cc5da0e5d44202"
# request["Cache-Control"] = "no-cache"
# request.body = {
#     "type": "ciec",
#     "rfc": "ROGA940403PT5",
#     "password": "secret123"
# }.to_json
#
# req_options = {
#     use_ssl: uri.scheme == "https",
# }
#
# response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
#   http.request(request)
# end
#
# p "response ------------------------------------------------------------"
# p  JSON.parse(response.body)



require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://api.sandbox.satws.com/insights/ROGA940403PT5/balance-sheet")

request = Net::HTTP::Get.new(uri.request_uri)

request.content_type = "application/id+json"
request["X-API-Key"] = "6f59423beb92df5571cc5da0e5d44202"
request["Cache-Control"] = "no-cache"
# request.body = {
#     "id": "957534d2-a8d3-49ee-8d67-130dd8acbd77	"
# }.to_json

req_options = {
    use_ssl: uri.scheme == "https",
}

response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end

result =  JSON.parse(response.body)
result.each do |res|
  p "result ------------------------------------------------------------"
  p res
end
