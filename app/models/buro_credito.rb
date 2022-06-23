class BuroCredito < ApplicationRecord

  require 'net/http'
  require 'uri'
  require 'json'


  def self.create_client data


    uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/info")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    request = Net::HTTP::Post.new(uri.request_uri)

    data

    request.content_type = "application/json"
    request["Authorization"] = token
    request.body = data.to_json

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)

  end

  def self.get_client id
    uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/#{id}")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/json"
    request["Authorization"] = token

    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)

  end


  def self.get_buro_report id
    uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/#{id}/query")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    data = {
        bureauPM: true,
        bureauPF: true,
        satBlackList: true,
        satRFC: true
    }

    request = Net::HTTP::Post.new(uri.request_uri)

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

  end

  def self.get_buro_info id
    uri = URI.parse("https://sandbox.moffin.mx/api/v1/profiles/#{id}/info")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    data = {
        bureauPM: true,
        bureauPF: true,
        satBlackList: true,
        satRFC: true
    }

    request = Net::HTTP::Get.new(uri.request_uri)

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

  end

  def self.get_all_reports
    uri = URI.parse("https://sandbox.moffin.mx/api/v1/report")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    # data = {
    #     bureauPM: true,
    #     bureauPF: true,
    #     satBlackList: true,
    #     satRFC: true
    # }

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/json"
    request["Authorization"] = token
    # request.body = data.to_json


    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)

  end

  def self.get_report_by_id id
    uri = URI.parse("https://sandbox.moffin.mx/api/v1/report/#{id}")

    token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

    # data = {
    #     bureauPM: true,
    #     bureauPF: true,
    #     satBlackList: true,
    #     satRFC: true
    # }

    request = Net::HTTP::Get.new(uri.request_uri)

    request.content_type = "application/json"
    request["Authorization"] = token
    # request.body = data.to_json


    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)

  end


  def self.get_report_by_id id
      uri = URI.parse("https://sandbox.moffin.mx/api/v1/report/#{id}")

      token = 'Token: 8d3f4980e76f1cf12da3005bac068636c1f36aa4cda8176de91bc64c00346f5b'

      # data = {
      #     bureauPM: true,
      #     bureauPF: true,
      #     satBlackList: true,
      #     satRFC: true
      # }

      request = Net::HTTP::Get.new(uri.request_uri)

      request.content_type = "application/json"
      request["Authorization"] = token
      # request.body = data.to_json


      req_options = {
          use_ssl: uri.scheme == "https",
      }

      response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
        http.request(request)
      end

      return JSON.parse(response.body)

  end


end
