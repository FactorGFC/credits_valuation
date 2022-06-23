uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/info")

token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

request = Net::HTTP::Post.new(uri.request_uri)
#
# data = [accountType: "PF", email: "alexrdgz03@gmail.com", firstName: "DIMITRI", middleName: "", rfc: "ROGA940403PT5",
#         firstLastName: "ADAMS", middlename: "ARNULFO",secondLastName: "GONZALEZ", address: "SIERRA CRISTAL 7918", city: "TLAXCALA",
#         state: "TLAX", zipCode: "90500", exteriorNumber: "", interiorNumber: "", neighborhood: "", municipality: "",
#         nationality: "MX"]


data = [
    accountType: "PM",
    name: "ALMACENES GHINOS,SA DE CV",
    rfc: "AGS930324RN7",
    address: "AV IGNACIO ALLENDE LOTE 11-B LOCAL 2",
    city: "TEPEAPULCO",
    neighborhood: "CD SAHAGUN HGO",
    postalCode: 43990,
    state: "HGO",
    country: "MX"
]

request.content_type = "application/json"
request["Authorization"] = token
request.body = data.to_json

req_options = {
    use_ssl: uri.scheme == "https",
}

response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end

p "JSON.parse(response.body) ------------------------------------------------------------------------"
p JSON.parse(response.body)

return JSON.parse(response.body)

# id = 4451
# uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/#{id}")
#
# token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'
#
# request = Net::HTTP::Get.new(uri.request_uri)
#
# request.content_type = "application/json"
# request["Authorization"] = token
#
# req_options = {
#     use_ssl: uri.scheme == "https",
# }
#
# response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
#   http.request(request)
# end
#
# p "JSON.parse(response.body) ------------------------------------------------------------------------"
# p JSON.parse(response.body)
#
# return JSON.parse(response.body)
