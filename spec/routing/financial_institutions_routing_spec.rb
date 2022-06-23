require "rails_helper"

RSpec.describe FinancialInstitutionsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/financial_institutions").to route_to("financial_institutions#index")
    end

    it "routes to #new" do
      expect(:get => "/financial_institutions/new").to route_to("financial_institutions#new")
    end

    it "routes to #show" do
      expect(:get => "/financial_institutions/1").to route_to("financial_institutions#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/financial_institutions/1/edit").to route_to("financial_institutions#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/financial_institutions").to route_to("financial_institutions#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/financial_institutions/1").to route_to("financial_institutions#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/financial_institutions/1").to route_to("financial_institutions#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/financial_institutions/1").to route_to("financial_institutions#destroy", :id => "1")
    end

  end
end
