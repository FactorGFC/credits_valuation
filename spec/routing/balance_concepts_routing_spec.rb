require "rails_helper"

RSpec.describe BalanceConceptsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/balance_concepts").to route_to("balance_concepts#index")
    end

    it "routes to #new" do
      expect(:get => "/balance_concepts/new").to route_to("balance_concepts#new")
    end

    it "routes to #show" do
      expect(:get => "/balance_concepts/1").to route_to("balance_concepts#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/balance_concepts/1/edit").to route_to("balance_concepts#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/balance_concepts").to route_to("balance_concepts#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/balance_concepts/1").to route_to("balance_concepts#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/balance_concepts/1").to route_to("balance_concepts#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/balance_concepts/1").to route_to("balance_concepts#destroy", :id => "1")
    end

  end
end
