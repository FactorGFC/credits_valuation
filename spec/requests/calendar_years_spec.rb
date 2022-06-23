require 'rails_helper'

RSpec.describe "CalendarYears", type: :request do
  describe "GET /calendar_years" do
    it "works! (now write some real specs)" do
      get calendar_years_path
      expect(response).to have_http_status(200)
    end
  end
end
