class NumberCollaboratorsController < ApplicationController
  before_action :set_number_collaborator, only: %i[ show edit update destroy ]

  # GET /number_collaborators or /number_collaborators.json
  def index
    @number_collaborators = NumberCollaborator.all
  end

  # GET /number_collaborators/1 or /number_collaborators/1.json
  def show
  end

  # GET /number_collaborators/new
  def new
    @number_collaborator = NumberCollaborator.new
  end

  # GET /number_collaborators/1/edit
  def edit
  end

  # POST /number_collaborators or /number_collaborators.json
  def create
    @number_collaborator = NumberCollaborator.new(number_collaborator_params)

    respond_to do |format|
      if @number_collaborator.save
        format.html { redirect_to number_collaborator_url(@number_collaborator), notice: "Number collaborator was successfully created." }
        format.json { render :show, status: :created, location: @number_collaborator }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @number_collaborator.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /number_collaborators/1 or /number_collaborators/1.json
  def update
    respond_to do |format|
      if @number_collaborator.update(number_collaborator_params)
        format.html { redirect_to number_collaborator_url(@number_collaborator), notice: "Number collaborator was successfully updated." }
        format.json { render :show, status: :ok, location: @number_collaborator }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @number_collaborator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /number_collaborators/1 or /number_collaborators/1.json
  def destroy
    @number_collaborator.destroy

    respond_to do |format|
      format.html { redirect_to number_collaborators_url, notice: "Number collaborator was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_number_collaborator
      @number_collaborator = NumberCollaborator.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def number_collaborator_params
      params.fetch(:number_collaborator, {})
    end
end
