require 'rails_helper'

RSpec.describe "StatusCompanies", type: :request do
  describe "GET /status_companies" do
    it "works! (now write some real specs)" do
      get status_companies_path
      expect(response).to have_http_status(302)
    end
  end
end
