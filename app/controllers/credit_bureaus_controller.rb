class Api::V1::CreditBureausController < ApplicationController
  before_action :set_credit_bureau, only: %i[ edit update destroy ]

  # GET /credit_bureaus or /credit_bureaus.json
  def index
    @search_credit_bureaus = policy_scope(CreditBureau).ransack(params[:q])
    @credit_bureau = @search_credit_bureaus.result.last
  end

  # GET /credit_bureaus/1 or /credit_bureaus/1.json
  def show
    @credit_bureau = JSON.pretty_generate(BuroCredito.get_report_by_id params[:id])

  end

  # GET /credit_bureaus/new
  def new
    @credit_bureau = CreditBureau.new
  end

  # GET /credit_bureaus/1/edit
  def edit
  end

  # POST /credit_bureaus or /credit_bureaus.json
  def create
    @credit_bureau = CreditBureau.new(credit_bureau_params)

    respond_to do |format|
      if @credit_bureau.save
        format.html { redirect_to credit_bureau_url(@credit_bureau), notice: "Credit bureau was successfully created." }
        format.json { render :show, status: :created, location: @credit_bureau }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @credit_bureau.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /credit_bureaus/1 or /credit_bureaus/1.json
  def update
    respond_to do |format|
      if @credit_bureau.update(credit_bureau_params)
        format.html { redirect_to credit_bureau_url(@credit_bureau), notice: "Credit bureau was successfully updated." }
        format.json { render :show, status: :ok, location: @credit_bureau }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @credit_bureau.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /credit_bureaus/1 or /credit_bureaus/1.json
  def destroy
    @credit_bureau.destroy

    respond_to do |format|
      format.html { redirect_to credit_bureaus_url, notice: "Credit bureau was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_credit_bureau
      @credit_bureau = CreditBureau.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def credit_bureau_params
      params.fetch(:credit_bureau, {})
    end
end
