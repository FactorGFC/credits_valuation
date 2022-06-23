require 'rails_helper'

RSpec.describe "BalanceConcepts", type: :request do
  describe "GET /balance_concepts" do
    it "works! (now write some real specs)" do
      get balance_concepts_path
      expect(response).to have_http_status(200)
    end
  end
end
