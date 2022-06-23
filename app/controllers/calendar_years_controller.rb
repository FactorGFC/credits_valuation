class CalendarYearsController < ApplicationController
  before_action :set_calendar_year, only: %i[ show edit update destroy ]

  # GET /calendar_years or /calendar_years.json
  def index
    @search_calendar_years = CalendarYear.all.ransack(params[:q])
    @calendar_years = @search_calendar_years.result.paginate(page: params[:page], per_page: get_pagination)
  end

  # GET /calendar_years/1 or /calendar_years/1.json
  def show
  end

  # GET /calendar_years/new
  def new
    @calendar_year = CalendarYear.new
  end

  # GET /calendar_years/1/edit
  def edit
  end

  # POST /calendar_years or /calendar_years.json
  def create
    @calendar_year = CalendarYear.new(calendar_year_params)

    respond_to do |format|
      if @calendar_year.save
        format.html { redirect_to calendar_years_path, notice: "Calendar year was successfully created." }
        format.json { render :show, status: :created, location: @calendar_year }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_year.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_years/1 or /calendar_years/1.json
  def update
    respond_to do |format|
      if @calendar_year.update(calendar_year_params)
        format.html { redirect_to calendar_years_path, notice: "Calendar year was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_year }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_year.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_years/1 or /calendar_years/1.json
  def destroy
    @calendar_year.destroy

    respond_to do |format|
      format.html { redirect_to calendar_years_url, notice: "Calendar year was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_year
      @calendar_year = CalendarYear.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_year_params
      params.require(:calendar_year).permit(:name, :year, :active)
    end
end
