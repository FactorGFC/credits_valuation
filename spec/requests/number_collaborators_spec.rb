require 'rails_helper'

RSpec.describe "NumberCollaborators", type: :request do
  describe "GET /number_collaborators" do
    it "works! (now write some real specs)" do
      get number_collaborators_path
      expect(response).to have_http_status(200)
    end
  end
end
