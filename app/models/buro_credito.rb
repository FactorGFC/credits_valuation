class BuroCredito < ApplicationRecord

  require 'net/http'
  require 'uri'
  require 'json'


  def self.create_client data

    #desarrollo
    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/profiles/info")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/profiles/info")
    token = ENV['TOKEN_BURO_PRODUCTION']

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
    #desarrollo
    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/profiles/#{id}")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/profiles/#{id}")
    token = ENV['TOKEN_BURO_PRODUCTION']

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


  def self.get_buro_report id,info_sat = nil
    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/profiles/#{id}/query")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/profiles/#{id}/query")
    token = ENV['TOKEN_BURO_PRODUCTION']

    account_type_pf_b = false
    account_type_pm_b = false


    # if info_sat['hydra:member'][0]['company'].present?
     # account_type = "PM"
    # account_type_pm_b = true
    #else
    #  first_name = info_sat['hydra:member'][0]['person']['firstName']
    #  first_last_name = info_sat['hydra:member'][0]['person']['middleName']
    #  second_last_name = info_sat['hydra:member'][0]['person']['lastName']
    #  account_type = "PF"
    # account_type_pf_b = true
    #end


    data = {
        bureauPM: true,
        bureauPF: false,
        satBlackList: false,
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

  def self.get_buro_info id , info_sat = nil
    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/profiles/#{id}/info")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/profiles/#{id}/info")
    token = ENV['TOKEN_BURO_PRODUCTION']

    account_type_pf_b = false
    account_type_pm_b = false


    #if info_sat['hydra:member'][0]['company'].present?
    # account_type_pm_b = true
    #else
    # account_type_pf_b = true
    #end



    data = {
        bureauPM: true,
        bureauPF: false,
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


    return JSON.parse(response.body)

  end

  def self.get_all_reports

    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/report")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/report")
    token = ENV['TOKEN_BURO_PRODUCTION']

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

  def self.get_report_by_id_repetido id

    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/report/#{id}")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/report/#{id}")
    token = ENV['TOKEN_BURO_PRODUCTION']

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
      # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/report/#{id}")
      # token = ENV['TOKEN_BURO_DEVELOP']

      uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/report/#{id}")
      token = ENV['TOKEN_BURO_PRODUCTION']


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

  def self.update_profile id

    # uri = URI.parse("#{ENV['URL_BUREAU_DEVELOP']}api/v1/report/#{id}")
    # token = ENV['TOKEN_BURO_DEVELOP']

    uri = URI.parse("#{ENV['URL_BUREAU_PRODUCTION']}api/v1/profiles/#{id}")
    token = ENV['TOKEN_BURO_PRODUCTION']

    data = {
        rfc: 'AIN080117NQA'
        # accountType: "PM"
        #
    }

    request = Net::HTTP::Put.new(uri.request_uri)

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


end
