class CalendarsController < ApplicationController
  before_action :set_calendar, only: %i[ show edit update destroy ]

  # GET /calendars or /calendars.json
  def index
    @search_calendars = Calendar.all.ransack(params[:q])
    @calendars = @search_calendars.result.paginate(page: params[:page], per_page: get_pagination)
  end

  # GET /calendars/1 or /calendars/1.json
  def show
  end

  # GET /calendars/new
  def new
    @calendar     = Calendar.new
    @period_types = [['MENSUAL', 'mensual'], ['TRIMESTRAL', 'trimestral'], ['ANUAL', 'anual']]
    @years        = []

    current_year = Time.zone.now.year

    10.times do
      @years.push([current_year, current_year])
      current_year -= 1
    end

    #@period_types = [['MENSUAL', 'mensual'], ['TRIMESTRAL', 'trimestral'], ['ANUAL', 'anual']]
  end

  # GET /calendars/1/edit
  def edit
    @period_types = [['MENSUAL', 'mensual'], ['TRIMESTRAL', 'trimestral'], ['ANUAL', 'anual']]
    @years        = []

    current_year = Time.zone.now.year

    10.times do
      @years.push([current_year, current_year])
      current_year -= 1
    end
  end

  # POST /calendars or /calendars.json
  def create
    @calendar = Calendar.new(calendar_params)

    respond_to do |format|
      if @calendar.save
        format.html { redirect_to calendars_path, notice: "La calendarización se creó correctamente." }
        format.json { render :show, status: :created, location: @calendar }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendars/1 or /calendars/1.json
  def update
    respond_to do |format|
      if @calendar.update(calendar_params)
        format.html { redirect_to calendars_path, notice: "La calendarización se editó correctamente." }
        format.json { render :show, status: :ok, location: @calendar }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendars/1 or /calendars/1.json
  def destroy
    @calendar.destroy

    respond_to do |format|
      format.html { redirect_to calendars_url, notice: "La calendarización se eliminó correctamente." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar
      @calendar = Calendar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_params
      params.require(:calendar).permit(:period_type, :year, :period)
    end
end
