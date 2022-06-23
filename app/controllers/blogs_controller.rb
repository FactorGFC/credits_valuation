class BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show edit update destroy ]

  # GET /blogs or /blogs.json
  def index
    @q      = Blog.ransack(params[:q])
    @blogs = @q.result(distinct: true)
  end

  # GET /blogs/1 or /blogs/1.json
  def show
  end

  # GET /blogs/new
  def new
    @blog = Blog.new
  end

  # GET /blogs/1/edit
  def edit
  end

  # POST /blogs or /blogs.json
  def create
    @blog = Blog.new(blog_params)

    @blog[:image] = @blog.encode_image(blog_params[:image])

    respond_to do |format|
      if @blog.save

        position_params[:id].present? ? Position.find(position_params[:id]).update(blog_id: @blog.id) : nil

        format.html { redirect_to blogs_path, notice: "El blog se creó correctamente." }
        format.json { render :show, status: :created, location: @blog }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogs/1 or /blogs/1.json
  def update
    respond_to do |format|
      if @blog.update(blog_params)
        if blog_params[:image].present?
          encoded_img = @blog.encode_image(blog_params[:image])
          @blog.update(image: encoded_img)
        end
        position_params[:id].present? ? Position.find(position_params[:id]).update(blog_id: @blog.id) : nil

        format.html { redirect_to blogs_path, notice: "El blog se editó correctamente." }
        format.json { render :show, status: :ok, location: @blog }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1 or /blogs/1.json
  def destroy
    @blog.destroy

    respond_to do |format|
      format.html { redirect_to blogs_url, notice: "El blog se eliminó correctamente." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:title, :description, :image)
    end

    # Only allow a list of trusted parameters through.
    def position_params
      params.require(:position).permit(:id)
    end
end
