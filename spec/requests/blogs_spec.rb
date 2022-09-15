require 'rails_helper'

RSpec.describe "Blogs", type: :request do
  describe "GET /blogs" do
    let(:user) { create(:user, phone: '123123123') }

    it "works! (now write some real specs)" do
      get blogs_path
      expect(response).to have_http_status(302)
    end
  end
end
