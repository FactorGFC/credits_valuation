class ApiController < ApplicationController

  skip_before_action :authenticate_user!, :is_authorized
  skip_before_action :verify_authenticity_token, only: [:credit_request]

  def get_info_sat 
    @company = Company.where(rfc: params[:rfc]).first


    p "@comapny --------------------------------------------------------"
    p @company

    render json: @company.try(:info_company)
    # respond_to do |format|
    #   format.json { @company.try(:info_company) }
    # end
  end

  def get_bureau_report
    @company = Company.where(rfc: params[:rfc]).first


    p "@comapny --------------------------------------------------------"
    p @company

    render json: @company.try(:credit_bureaus).last.try(:bureau_report)
    # respond_to do |format|
    #   format.json { @company.try(:info_company) }
    # end
  end
  
end
