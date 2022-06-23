class BalanceConceptsController < ApplicationController
  before_action :set_balance_concept, only: %i[ show edit update destroy ]

  # GET /balance_concepts or /balance_concepts.json
  def index
    #@search_balance_concepts = policy_scope(BalanceConcept).ransack(params[:q])
    @search_balance_concepts = BalanceConcept.where(ancestry: nil).ransack(params[:q])
    @balance_concepts = @search_balance_concepts.result.paginate(page: params[:page], per_page: get_pagination)
  end

  # GET /balance_concepts/1 or /balance_concepts/1.json
  def show
  end

  # GET /balance_concepts/new
  def new
    @balance_concept = BalanceConcept.new
  end

  # GET /balance_concepts/1/edit
  def edit
  end

  # POST /balance_concepts or /balance_concepts.json
  def create
    @balance_concept = BalanceConcept.new(balance_concept_params)

    respond_to do |format|
      if @balance_concept.save
        format.html { redirect_to balance_concepts_path, notice: "Balance concept was successfully created." }
        format.json { render :show, status: :created, location: @balance_concept }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @balance_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /balance_concepts/1 or /balance_concepts/1.json
  def update
    respond_to do |format|
      if @balance_concept.update(balance_concept_params)
        format.html { redirect_to balance_concepts_path, notice: "Balance concept was successfully updated." }
        format.json { render :show, status: :ok, location: @balance_concept }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @balance_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /balance_concepts/1 or /balance_concepts/1.json
  def destroy
    @balance_concept.destroy

    respond_to do |format|
      format.html { redirect_to balance_concepts_url, notice: "Balance concept was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_balance_concept
      @balance_concept = BalanceConcept.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def balance_concept_params
      params.require(:balance_concept).permit(:name, :key, :active, :parent_id, :capturable)
    end
end
