class CompanyFilesController < ApplicationController
  before_action :set_company_file, only: %i[ show edit update destroy ]

  # GET /company_files or /company_files.json
  def index
    @company_files = CompanyFile.all
  end

  # GET /company_files/1 or /company_files/1.json
  def show
  end

  # GET /company_files/new
  def new
    @company_file = CompanyFile.new
  end

  # GET /company_files/1/edit
  def edit
  end

  # POST /company_files or /company_files.json
  def create
    @company_file = CompanyFile.new(company_file_params)

    respond_to do |format|
      if @company_file.save
        format.html { redirect_to company_file_url(@company_file), notice: "Company file was successfully created." }
        format.json { render :show, status: :created, location: @company_file }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @company_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /company_files/1 or /company_files/1.json
  def update
    respond_to do |format|
      if @company_file.update(company_file_params)
        format.html { redirect_to company_file_url(@company_file), notice: "Company file was successfully updated." }
        format.json { render :show, status: :ok, location: @company_file }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @company_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /company_files/1 or /company_files/1.json
  def destroy
    @company_file.destroy

    respond_to do |format|
      format.html { redirect_to company_files_url, notice: "Company file was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company_file
      @company_file = CompanyFile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def company_file_params
      params.fetch(:company_file, {})
    end
end
