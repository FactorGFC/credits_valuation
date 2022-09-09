class RequestCommentsController < ApplicationController
  before_action :set_request_comment, only: %i[ show edit update destroy ]

  # GET /request_comments or /request_comments.json
  def index
    #@request_comments = RequestComment.all
    #@company = Company.find(params[:company_id])
    #@request = Request.joins(:process_status).where(company_id: params[:company_id]).order('process_status.order DESC').first
    #@request_comments = RequestComment.where(request_id: @request.try(:id))

    @request = Request.find(params[:request_id])
    @company = @request.company
    @request_comments = RequestComment.where(request_id: @request.try(:id))
  end

  # GET /request_comments/1 or /request_comments/1.json
  def show
  end

  # GET /request_comments/new
  def new
    @request_comment = RequestComment.new
  end

  # GET /request_comments/1/edit
  def edit
  end

  # POST /request_comments or /request_comments.json
  def create
    @request_comment = RequestComment.new(request_comment_params)

    respond_to do |format|
      if @request_comment.save
        format.html { redirect_to request_comment_url(@request_comment), notice: "Request comment was successfully created." }
        format.json { render :show, status: :created, location: @request_comment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @request_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /request_comments/1 or /request_comments/1.json
  def update
    respond_to do |format|
      if @request_comment.update(request_comment_params)
        format.html { redirect_to request_comment_url(@request_comment), notice: "Request comment was successfully updated." }
        format.json { render :show, status: :ok, location: @request_comment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @request_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /request_comments/1 or /request_comments/1.json
  def destroy
    @request_comment.destroy

    respond_to do |format|
      format.html { redirect_to request_comments_url, notice: "Request comment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def add_comment_to_request
    company_id = Request.find(params[:request_id]).try(:company_id)
    request_comment = RequestComment.new(request_id: params[:request_id], analyst_id: params[:analyst_id], process_status_id: params[:process_id], user_id: params[:user_id], comment: params[:comment])

    respond_to do |format|
      if request_comment.save
        format.html { redirect_to "/request_comments/#{request_comment.request.id}", notice: "Comentario agregado exitosamente." }
      else
        #format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: request_comment.errors, status: :unprocessable_entity }
      end
    end


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_request_comment
      @request_comment = RequestComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def request_comment_params
      params.fetch(:request_comment, {})
    end
end
