require 'rails_helper'

RSpec.describe "CompanyFiles", type: :request do
  describe "GET /company_files" do
    it "works! (now write some real specs)" do
      get company_files_path
      expect(response).to have_http_status(200)
    end
  end
end
