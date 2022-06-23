class StatusCompaniesController < ApplicationController
  before_action :set_status_company, only: %i[ show edit update destroy ]

  # GET /status_companies or /status_companies.json
  def index
    @status_companies = StatusCompany.all
  end

  # GET /status_companies/1 or /status_companies/1.json
  def show
  end

  # GET /status_companies/new
  def new
    @status_company = StatusCompany.new
  end

  # GET /status_companies/1/edit
  def edit
  end

  # POST /status_companies or /status_companies.json
  def create
    @status_company = StatusCompany.new(status_company_params)

    respond_to do |format|
      if @status_company.save
        format.html { redirect_to status_company_url(@status_company), notice: "Status companies was successfully created." }
        format.json { render :show, status: :created, location: @status_company }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @status_company.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /status_companies/1 or /status_companies/1.json
  def update
    respond_to do |format|
      if @status_company.update(status_company_params)
        format.html { redirect_to status_company_url(@status_company), notice: "Status companies was successfully updated." }
        format.json { render :show, status: :ok, location: @status_company }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @status_company.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /status_companies/1 or /status_companies/1.json
  def destroy
    @status_company.destroy

    respond_to do |format|
      format.html { redirect_to status_companies_url, notice: "Status companies was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_status_company
      @status_company = StatusCompany.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def status_company_params
      params.fetch(:status_company, {})
    end
end
