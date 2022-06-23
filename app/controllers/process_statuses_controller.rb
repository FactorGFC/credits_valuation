class ProcessStatusesController < ApplicationController
  before_action :set_process_status, only: %i[ show edit update destroy ]

  # GET /process_statuses or /process_statuses.json
  def index
    @search_process_statuses = ProcessStatus.all.ransack(params[:q])
    @process_statuses = @search_process_statuses.result.paginate(page: params[:page], per_page: get_pagination)
    #@process_statuses = ProcessStatus.all
  end

  # GET /process_statuses/1 or /process_statuses/1.json
  def show
  end

  # GET /process_statuses/new
  def new
    @process_status = ProcessStatus.new
  end

  # GET /process_statuses/1/edit
  def edit
  end

  # POST /process_statuses or /process_statuses.json
  def create
    @process_status = ProcessStatus.new(process_status_params)

    respond_to do |format|
      if @process_status.save
        format.html { redirect_to process_status_url(@process_status), notice: "Process status was successfully created." }
        format.json { render :show, status: :created, location: @process_status }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @process_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /process_statuses/1 or /process_statuses/1.json
  def update
    respond_to do |format|
      if @process_status.update(process_status_params)
        format.html { redirect_to process_status_url(@process_status), notice: "Process status was successfully updated." }
        format.json { render :show, status: :ok, location: @process_status }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @process_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /process_statuses/1 or /process_statuses/1.json
  def destroy
    @process_status.destroy

    respond_to do |format|
      format.html { redirect_to process_statuses_url, notice: "Process status was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_process_status
      @process_status = ProcessStatus.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def process_status_params
      params.require(:process_status).permit(:name, :key, :order, :active)
    end
end
