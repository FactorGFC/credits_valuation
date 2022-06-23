require "rails_helper"

RSpec.describe CreditBureausController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/credit_bureaus").to route_to("credit_bureaus#index")
    end

    it "routes to #new" do
      expect(get: "/credit_bureaus/new").to route_to("credit_bureaus#new")
    end

    it "routes to #show" do
      expect(get: "/credit_bureaus/1").to route_to("credit_bureaus#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/credit_bureaus/1/edit").to route_to("credit_bureaus#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/credit_bureaus").to route_to("credit_bureaus#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/credit_bureaus/1").to route_to("credit_bureaus#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/credit_bureaus/1").to route_to("credit_bureaus#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/credit_bureaus/1").to route_to("credit_bureaus#destroy", id: "1")
    end
  end
end
