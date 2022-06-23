class CompanyClientsController < ApplicationController
  before_action :set_company_client, only: %i[ show edit update destroy ]

  # GET /company_clients or /company_clients.json
  def index
    @company_clients = CompanyClient.all
  end

  # GET /company_clients/1 or /company_clients/1.json
  def show
  end

  # GET /company_clients/new
  def new
    @company_client = CompanyClient.new
  end

  # GET /company_clients/1/edit
  def edit
  end

  # POST /company_clients or /company_clients.json
  def create
    @company_client = CompanyClient.new(company_client_params)

    respond_to do |format|
      if @company_client.save
        format.html { redirect_to company_client_url(@company_client), notice: "Company client was successfully created." }
        format.json { render :show, status: :created, location: @company_client }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @company_client.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /company_clients/1 or /company_clients/1.json
  def update
    respond_to do |format|
      if @company_client.update(company_client_params)
        format.html { redirect_to company_client_url(@company_client), notice: "Company client was successfully updated." }
        format.json { render :show, status: :ok, location: @company_client }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @company_client.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /company_clients/1 or /company_clients/1.json
  def destroy
    @company_client.destroy

    respond_to do |format|
      format.html { redirect_to company_clients_url, notice: "Company client was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company_client
      @company_client = CompanyClient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def company_client_params
      params.require(:company_client).permit(:name, :sales, :credit)
    end
end
