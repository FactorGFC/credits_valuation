require 'rails_helper'

RSpec.describe "CompanyClients", type: :request do
  describe "GET /company_clients" do
    it "works! (now write some real specs)" do
      get company_clients_path
      expect(response).to have_http_status(200)
    end
  end
end
