class FactorCreditsController < ApplicationController
  before_action :set_factor_credit, only: %i[ show edit update destroy ]

  # GET /factor_credits or /factor_credits.json
  def index
    @search_factor_credits = FactorCredit.ransack(params[:q])
    @factor_credits = @search_factor_credits.result.paginate(page: params[:page], per_page: get_pagination).order('name ASC')
    #@factor_credits = FactorCredit.all
  end

  # GET /factor_credits/1 or /factor_credits/1.json
  def show
  end

  # GET /factor_credits/new
  def new
    @factor_credit = FactorCredit.new
  end

  # GET /factor_credits/1/edit
  def edit
  end

  # POST /factor_credits or /factor_credits.json
  def create
    @factor_credit = FactorCredit.new(factor_credit_params)

    respond_to do |format|
      if @factor_credit.save
        format.html { redirect_to factor_credits_url(@factor_credit), notice: "Se creó el crédito corrrectamente." }
        format.json { render :show, status: :created, location: @factor_credit }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @factor_credit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /factor_credits/1 or /factor_credits/1.json
  def update
    respond_to do |format|
      if @factor_credit.update(factor_credit_params)
        format.html { redirect_to factor_credits_url(@factor_credit), notice: "Se actualizó el crédito correctamente." }
        format.json { render :show, status: :ok, location: @factor_credit }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @factor_credit.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /factor_credits/1 or /factor_credits/1.json
  def destroy
    @factor_credit.destroy

    respond_to do |format|
      format.html { redirect_to factor_credits_url, notice: "Se eliminó el crédito correctamente." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_factor_credit
      @factor_credit = FactorCredit.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def factor_credit_params
      params.require(:factor_credit).permit(:name, :description, :active, :order)
    end
end
