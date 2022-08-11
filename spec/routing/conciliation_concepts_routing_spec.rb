require "rails_helper"

RSpec.describe ConciliationConceptsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/conciliation_concepts").to route_to("conciliation_concepts#index")
    end

    it "routes to #new" do
      expect(get: "/conciliation_concepts/new").to route_to("conciliation_concepts#new")
    end

    it "routes to #show" do
      expect(get: "/conciliation_concepts/1").to route_to("conciliation_concepts#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/conciliation_concepts/1/edit").to route_to("conciliation_concepts#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/conciliation_concepts").to route_to("conciliation_concepts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/conciliation_concepts/1").to route_to("conciliation_concepts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/conciliation_concepts/1").to route_to("conciliation_concepts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/conciliation_concepts/1").to route_to("conciliation_concepts#destroy", id: "1")
    end
  end
end
