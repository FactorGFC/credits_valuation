class ConciliationConceptsController < ApplicationController
  before_action :set_conciliation_concept, only: %i[ show edit update destroy ]

  # GET /conciliation_concepts or /conciliation_concepts.json
  def index
    @conciliation_concepts = ConciliationConcept.all
  end

  # GET /conciliation_concepts/1 or /conciliation_concepts/1.json
  def show
  end

  # GET /conciliation_concepts/new
  def new
    @conciliation_concept = ConciliationConcept.new
  end

  # GET /conciliation_concepts/1/edit
  def edit
  end

  # POST /conciliation_concepts or /conciliation_concepts.json
  def create
    @conciliation_concept = ConciliationConcept.new(conciliation_concept_params)

    respond_to do |format|
      if @conciliation_concept.save
        format.html { redirect_to conciliation_concept_url(@conciliation_concept), notice: "Conciliation concept was successfully created." }
        format.json { render :show, status: :created, location: @conciliation_concept }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @conciliation_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /conciliation_concepts/1 or /conciliation_concepts/1.json
  def update
    respond_to do |format|
      if @conciliation_concept.update(conciliation_concept_params)
        format.html { redirect_to conciliation_concept_url(@conciliation_concept), notice: "Conciliation concept was successfully updated." }
        format.json { render :show, status: :ok, location: @conciliation_concept }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @conciliation_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /conciliation_concepts/1 or /conciliation_concepts/1.json
  def destroy
    @conciliation_concept.destroy

    respond_to do |format|
      format.html { redirect_to conciliation_concepts_url, notice: "Conciliation concept was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_conciliation_concept
      @conciliation_concept = ConciliationConcept.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def conciliation_concept_params
      params.require(:conciliation_concept).permit(:name, :key, :active)
    end
end
