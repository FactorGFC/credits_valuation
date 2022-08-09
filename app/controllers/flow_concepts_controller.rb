class FlowConceptsController < ApplicationController
  before_action :set_flow_concept, only: %i[ show edit update destroy ]

  # GET /flow_concepts or /flow_concepts.json
  def index
    @flow_concepts = FlowConcept.all
  end

  # GET /flow_concepts/1 or /flow_concepts/1.json
  def show
  end

  # GET /flow_concepts/new
  def new
    @flow_concept = FlowConcept.new
  end

  # GET /flow_concepts/1/edit
  def edit
  end

  # POST /flow_concepts or /flow_concepts.json
  def create
    @flow_concept = FlowConcept.new(flow_concept_params)

    respond_to do |format|
      if @flow_concept.save
        format.html { redirect_to flow_concept_url(@flow_concept), notice: "Flow concept was successfully created." }
        format.json { render :show, status: :created, location: @flow_concept }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @flow_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /flow_concepts/1 or /flow_concepts/1.json
  def update
    respond_to do |format|
      if @flow_concept.update(flow_concept_params)
        format.html { redirect_to flow_concept_url(@flow_concept), notice: "Flow concept was successfully updated." }
        format.json { render :show, status: :ok, location: @flow_concept }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @flow_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flow_concepts/1 or /flow_concepts/1.json
  def destroy
    @flow_concept.destroy

    respond_to do |format|
      format.html { redirect_to flow_concepts_url, notice: "Flow concept was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flow_concept
      @flow_concept = FlowConcept.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def flow_concept_params
      params.require(:flow_concept).permit(:name, :key, :active)
    end
end
