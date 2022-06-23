class SatW < ApplicationRecord

  require 'net/http'
  require 'uri'
  require 'json'



  def self.create_sat_ws data


    uri = URI.parse("https://api.sandbox.satws.com/credentials")

    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'

    request = Net::HTTP::Post.new(uri.request_uri)

    request.content_type = "application/json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"
    request.body = data.to_json

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)

  end

  def self.get_credential id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #Desarrollo
    uri = URI.parse("https://api.sandbox.satws.com/credentials/" +id  )
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'

    #Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/credentials/" +id  )

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
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

    return JSON.parse(response.body)
  end

  def self.get_tax_status rfc
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #Desarollo
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'
    uri = URI.parse("https://api.sandbox.satws.com/taxpayers/#{rfc}/tax-status")

    #Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/taxpayers/#{rfc}/tax-status")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
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



    return JSON.parse(response.body)
  end

  def self.get_taxpayers id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #Desarollo
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'
    uri = URI.parse("https://api.sandbox.satws.com/tax-status/#{id}")

    #Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/tax-status/#{id}")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end



    return JSON.parse(response.body)
  end

  def self.get_income_statment id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #Desarrollo
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'
    uri = URI.parse("https://api.sandbox.satws.com/insights/#{id}/income-statement")
    # uri = URI.parse("https://api.sandbox.satws.com/insights/123/income-statement")

    #Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/insights/#{id}/income-statement")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end



    return JSON.parse(response.body)

  end


  def self.get_balance_sheet id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #https://api.sandbox.satws.com/insights/{id}/balance-sheet

    # Desarrollo
    uri = URI.parse("https://api.sandbox.satws.com/insights/#{id}/balance-sheet")
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'

    # Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/insights/#{id}/balance-sheet")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)
  end

  def self.get_customer_concentration id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    p "id --------------------------------------------------------------------------------"
    p id
    #https://api.sandbox.satws.com/insights/{id}/balance-sheet

    # Desarrollo
    #
    uri = URI.parse("https://api.sandbox.satws.com/insights/#{id}/customer-concentration")
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'

    # Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/insights/#{id}/balance-sheet")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)
  end

  def self.get_suppliers_concentration id
    primer_api_key = '6f59423beb92df5571cc5da0e5d44202'

    #https://api.sandbox.satws.com/insights/{id}/balance-sheet

    # Desarrollo

    uri = URI.parse("https://api.sandbox.satws.com/insights/#{id}/supplier-concentration")
    segunda_api_key = '690cac03af62759362bd1fed20710ab4'

    # Produccion
    # segunda_api_key = 'dc087a1fc8bb716cb2c2ff199c6d69c0'
    # uri = URI.parse("https://api.satws.com/insights/#{id}/balance-sheet")

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = segunda_api_key
    request["Cache-Control"] = "no-cache"

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)
  end

end
