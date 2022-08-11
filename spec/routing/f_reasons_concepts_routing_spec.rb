require "rails_helper"

RSpec.describe FReasonsConceptsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/f_reasons_concepts").to route_to("f_reasons_concepts#index")
    end

    it "routes to #new" do
      expect(get: "/f_reasons_concepts/new").to route_to("f_reasons_concepts#new")
    end

    it "routes to #show" do
      expect(get: "/f_reasons_concepts/1").to route_to("f_reasons_concepts#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/f_reasons_concepts/1/edit").to route_to("f_reasons_concepts#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/f_reasons_concepts").to route_to("f_reasons_concepts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/f_reasons_concepts/1").to route_to("f_reasons_concepts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/f_reasons_concepts/1").to route_to("f_reasons_concepts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/f_reasons_concepts/1").to route_to("f_reasons_concepts#destroy", id: "1")
    end
  end
end
