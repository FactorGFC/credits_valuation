require 'rails_helper'

RSpec.describe "FinancialInstitutions", type: :request do
  describe "GET /financial_institutions" do
    it "works! (now write some real specs)" do
      get financial_institutions_path
      expect(response).to have_http_status(200)
    end
  end
end
