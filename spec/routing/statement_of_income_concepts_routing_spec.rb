require "rails_helper"

RSpec.describe StatementOfIncomeConceptsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/income_statement_concepts").to route_to("income_statement_concepts#index")
    end

    it "routes to #new" do
      expect(get: "/income_statement_concepts/new").to route_to("income_statement_concepts#new")
    end

    it "routes to #show" do
      expect(get: "/income_statement_concepts/1").to route_to("income_statement_concepts#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/income_statement_concepts/1/edit").to route_to("income_statement_concepts#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/income_statement_concepts").to route_to("income_statement_concepts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/income_statement_concepts/1").to route_to("income_statement_concepts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/income_statement_concepts/1").to route_to("income_statement_concepts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/income_statement_concepts/1").to route_to("income_statement_concepts#destroy", id: "1")
    end
  end
end
