class IncomeStatementConceptsController < ApplicationController
  before_action :set_income_statement_concept, only: %i[ show edit update destroy ]

  # GET /income_statement_concepts or /income_statement_concepts.json
  def index
    @search_income_statement_concepts = IncomeStatementConcept.where(ancestry: nil).ransack(params[:q])
    @income_statement_concepts = @search_income_statement_concepts.result.paginate(page: params[:page], per_page: get_pagination)
  end

  # GET /income_statement_concepts/1 or /income_statement_concepts/1.json
  def show
  end

  # GET /income_statement_concepts/new
  def new
    @income_statement_concept = IncomeStatementConcept.new
  end

  # GET /income_statement_concepts/1/edit
  def edit
  end

  # POST /income_statement_concepts or /income_statement_concepts.json
  def create
    @income_statement_concept = IncomeStatementConcept.new(income_statement_concept_params)

    respond_to do |format|
      if @income_statement_concept.save
        format.html { redirect_to income_statement_concepts_path, notice: "Statement of income concept was successfully created." }
        format.json { render :show, status: :created, location: @income_statement_concept }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @income_statement_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /income_statement_concepts/1 or /income_statement_concepts/1.json
  def update
    respond_to do |format|
      if @income_statement_concept.update(statement_of_income_concept_params)
        format.html { redirect_to income_statement_concepts_path, notice: "Statement of income concept was successfully updated." }
        format.json { render :show, status: :ok, location: @income_statement_concept }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @income_statement_concept.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /income_statement_concepts/1 or /income_statement_concepts/1.json
  def destroy
    @income_statement_concept.destroy

    respond_to do |format|
      format.html { redirect_to income_statement_concepts_url, notice: "Statement of income concept was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income_statement_concept
      @income_statement_concept = IncomeStatementConcept.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def income_statement_concept_params
      params.require(:income_statement_concept).permit(:name, :key, :number_key, :active, :capturable, :ancestry, :parent_id)
    end
end
