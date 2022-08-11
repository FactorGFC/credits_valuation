class FReasonsConceptsController < ApplicationController
  before_action :set_f_reasons_concept, only: %i[ show edit update destroy ]

  # GET /f_reasons_concepts or /f_reasons_concepts.json
  def index
    @search_f_reasons_concepts = FReasonsConcept.ransack(params[:q])
    @f_reasons_concepts = @search_f_reasons_concepts.result.paginate(page: params[:page], per_page: get_pagination)
  end

  # GET /f_reasons_concepts/1 or /f_reasons_concepts/1.json
  def show
  end

  # GET /f_reasons_concepts/new
  def new
    @f_reasons_concept = FReasonsConcept.new
  end

  # GET /f_reasons_concepts/1/edit
  def edit
  end

  # POST /f_reasons_concepts or /f_reasons_concepts.json
  def create
    @f_reasons_concept = FReasonsConcept.new(f_reasons_concept_params)

    respond_to do |format|
      if @f_reasons_concept.save
        format.html { redirect_to f_reasons_concept_url(@f_reasons_concept), notice: "F reasons concept was successfully created." }
        format.json { render :show, status: :created, location: @f_reasons_concept }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @f_reasons_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /f_reasons_concepts/1 or /f_reasons_concepts/1.json
  def update
    respond_to do |format|
      if @f_reasons_concept.update(f_reasons_concept_params)
        format.html { redirect_to f_reasons_concept_url(@f_reasons_concept), notice: "F reasons concept was successfully updated." }
        format.json { render :show, status: :ok, location: @f_reasons_concept }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @f_reasons_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /f_reasons_concepts/1 or /f_reasons_concepts/1.json
  def destroy
    @f_reasons_concept.destroy

    respond_to do |format|
      format.html { redirect_to f_reasons_concepts_url, notice: "F reasons concept was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_f_reasons_concept
      @f_reasons_concept = FReasonsConcept.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def f_reasons_concept_params
      params.require(:f_reasons_concept).permit(:name, :key, :formula, :description)
    end
end
