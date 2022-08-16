class IncomeStatementFilesController < ApplicationController
  before_action :set_income_statement_file, only: %i[ show edit update destroy ]

  # GET /income_statement_files or /income_statement_files.json
  def index
    @income_statement_files = IncomeStatementFile.all
  end

  # GET /income_statement_files/1 or /income_statement_files/1.json
  def show
  end

  # GET /income_statement_files/new
  def new
    @income_statement_file = IncomeStatementFile.new
  end

  # GET /income_statement_files/1/edit
  def edit
  end

  # POST /income_statement_files or /income_statement_files.json
  def create
    @income_statement_file = IncomeStatementFile.new(income_statement_file_params)

    respond_to do |format|
      if @income_statement_file.save
        format.html { redirect_to income_statement_file_url(@income_statement_file), notice: "Income statement file was successfully created." }
        format.json { render :show, status: :created, location: @income_statement_file }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @income_statement_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /income_statement_files/1 or /income_statement_files/1.json
  def update
    respond_to do |format|
      if @income_statement_file.update(income_statement_file_params)
        format.html { redirect_to income_statement_file_url(@income_statement_file), notice: "Income statement file was successfully updated." }
        format.json { render :show, status: :ok, location: @income_statement_file }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @income_statement_file.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /income_statement_files/1 or /income_statement_files/1.json
  def destroy
    @income_statement_file.destroy

    respond_to do |format|
      format.html { redirect_to income_statement_files_url, notice: "Income statement file was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income_statement_file
      @income_statement_file = IncomeStatementFile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def income_statement_file_params
      params.fetch(:income_statement_file, {})
    end
end
