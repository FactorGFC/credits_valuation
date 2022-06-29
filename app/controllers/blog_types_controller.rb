class BlogTypesController < ApplicationController
  before_action :set_blog_type, only: %i[ show edit update destroy ]

  # GET /blogs or /blogs.json
  def index
    @blog_types = BlogType.all
  end

  # GET /blog_types/1 or /blog_types/1.json
  def show
  end

  # GET /blog_types/new
  def new
    @blog_type = BlogType.new
  end

  # GET /blog_types/1/edit
  def edit
  end

  # POST /blog_types or /blog_types.json
  def create
    @blog_type = BlogType.new(blog_type_params)

    respond_to do |format|
      if @blog_type.save
        format.html { redirect_to blog_types_path, notice: "Tipo de blog creado exitosamente" }
        format.json { render :show, status: :created, location: @blog_type }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blog_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_types/1 or /blog_types/1.json
  def update
    respond_to do |format|
      if @blog_type.update(blog_type_params)
        format.html { redirect_to blog_types_path, notice: "Tipo de blog actualizado exitosamente." }
        format.json { render :show, status: :ok, location: @blog_type }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blog_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_types/1 or /blog_types/1.json
  def destroy
    @blog_type.destroy

    respond_to do |format|
      format.html { redirect_to blog_types_url, notice: "Tipo de blog eliminado exitosamente." }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_blog_type
    @blog_type = BlogType.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def blog_type_params
    params.require(:blog_type).permit(:name)
  end
end
