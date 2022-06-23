require 'rails_helper'

RSpec.describe "CreditTypes", type: :request do
  describe "GET /credit_types" do
    it "works! (now write some real specs)" do
      get credit_types_path
      expect(response).to have_http_status(200)
    end
  end
end
