require "rails_helper"

RSpec.describe FactorCreditsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/factor_credits").to route_to("factor_credits#index")
    end

    it "routes to #new" do
      expect(get: "/factor_credits/new").to route_to("factor_credits#new")
    end

    it "routes to #show" do
      expect(get: "/factor_credits/1").to route_to("factor_credits#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/factor_credits/1/edit").to route_to("factor_credits#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/factor_credits").to route_to("factor_credits#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/factor_credits/1").to route_to("factor_credits#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/factor_credits/1").to route_to("factor_credits#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/factor_credits/1").to route_to("factor_credits#destroy", id: "1")
    end
  end
end
