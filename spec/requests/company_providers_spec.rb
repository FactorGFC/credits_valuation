require 'rails_helper'

RSpec.describe "CompanyProviders", type: :request do
  describe "GET /company_providers" do
    it "works! (now write some real specs)" do
      get company_providers_path
      expect(response).to have_http_status(200)
    end
  end
end
