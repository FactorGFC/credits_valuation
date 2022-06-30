class SatW < ApplicationRecord

  require 'net/http'
  require 'uri'
  require 'json'



  def self.create_sat_ws data


    #Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}credentials")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    #Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}credentials")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    
    request = Net::HTTP::Post.new(uri.request_uri)

    request.content_type = "application/json"
    request["X-API-Key"] = api_key
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

    #Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}credentials/" +id  )
    api_key = ENV['API_KEY_SAT_DEVELOP']
    
    #Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}credentials/" +id  )
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    #Desarollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}taxpayers/#{rfc}/tax-status")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    #Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}taxpayers/#{rfc}/tax-status")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    #Desarollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}tax-status/#{id}")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    #Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}tax-status/#{id}")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    #Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}insights/#{id}/income-statement")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    #Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}insights/#{id}/income-statement")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    # Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}insights/#{id}/balance-sheet")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    # Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}insights/#{id}/balance-sheet")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    # Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}insights/#{id}/customer-concentration")
    api_key = ENV['API_KEY_SAT_DEVELOP']

    # Produccion
    # uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}insights/#{id}/customer-concentration")
    # api_key = ENV['API_KEY_SAT_PRODUCTION']

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/id+json"
    request["X-API-Key"] = api_key
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

    # Desarrollo
    uri = URI.parse("#{ENV['URL_SAT_DEVELOP']}insights/#{id}/supplier-concentration")
    api_key = ENV['API_KEY_SAT_DEVELOP']
    
    # Produccion
    uri = URI.parse("#{ENV['URL_SAT_PRODUCTION']}insights/#{id}/supplier-concentration")
    api_key = ENV['API_KEY_SAT_PRODUCTION']

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
