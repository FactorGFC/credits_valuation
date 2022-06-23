class CompanyProvidersController < ApplicationController
  before_action :set_company_provider, only: %i[ show edit update destroy ]

  # GET /company_providers or /company_providers.json
  def index
    @company_providers = CompanyProvider.all
  end

  # GET /company_providers/1 or /company_providers/1.json
  def show
  end

  # GET /company_providers/new
  def new
    @company_provider = CompanyProvider.new
  end

  # GET /company_providers/1/edit
  def edit
  end

  # POST /company_providers or /company_providers.json
  def create
    @company_provider = CompanyProvider.new(company_provider_params)

    respond_to do |format|
      if @company_provider.save
        format.html { redirect_to company_provider_url(@company_provider), notice: "Company provider was successfully created." }
        format.json { render :show, status: :created, location: @company_provider }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @company_provider.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /company_providers/1 or /company_providers/1.json
  def update
    respond_to do |format|
      if @company_provider.update(company_provider_params)
        format.html { redirect_to company_provider_url(@company_provider), notice: "Company provider was successfully updated." }
        format.json { render :show, status: :ok, location: @company_provider }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @company_provider.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /company_providers/1 or /company_providers/1.json
  def destroy
    @company_provider.destroy

    respond_to do |format|
      format.html { redirect_to company_providers_url, notice: "Company provider was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company_provider
      @company_provider = CompanyProvider.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def company_provider_params
      params.require(:company_provider).permit(:name, :purchase, :credit)
    end
end
