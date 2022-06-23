class FinancialInstitutionsController < ApplicationController
  before_action :set_financial_institution, only: %i[ show edit update destroy ]

  # GET /financial_institutions or /financial_institutions.json
  def index
    @financial_institutions = FinancialInstitution.all
  end

  # GET /financial_institutions/1 or /financial_institutions/1.json
  def show
  end

  # GET /financial_institutions/new
  def new
    @financial_institution = FinancialInstitution.new
  end

  # GET /financial_institutions/1/edit
  def edit
  end

  # POST /financial_institutions or /financial_institutions.json
  def create
    @financial_institution = FinancialInstitution.new(financial_institution_params)

    respond_to do |format|
      if @financial_institution.save
        format.html { redirect_to financial_institution_url(@financial_institution), notice: "Financial institution was successfully created." }
        format.json { render :show, status: :created, location: @financial_institution }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @financial_institution.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /financial_institutions/1 or /financial_institutions/1.json
  def update
    respond_to do |format|
      if @financial_institution.update(financial_institution_params)
        format.html { redirect_to financial_institution_url(@financial_institution), notice: "Financial institution was successfully updated." }
        format.json { render :show, status: :ok, location: @financial_institution }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @financial_institution.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /financial_institutions/1 or /financial_institutions/1.json
  def destroy
    @financial_institution.destroy

    respond_to do |format|
      format.html { redirect_to financial_institutions_url, notice: "Financial institution was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_financial_institution
      @financial_institution = FinancialInstitution.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def financial_institution_params
      params.fetch(:financial_institution, {})
    end
end
