require "rails_helper"

RSpec.describe CompanyProvidersController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/company_providers").to route_to("company_providers#index")
    end

    it "routes to #new" do
      expect(:get => "/company_providers/new").to route_to("company_providers#new")
    end

    it "routes to #show" do
      expect(:get => "/company_providers/1").to route_to("company_providers#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/company_providers/1/edit").to route_to("company_providers#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/company_providers").to route_to("company_providers#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/company_providers/1").to route_to("company_providers#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/company_providers/1").to route_to("company_providers#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/company_providers/1").to route_to("company_providers#destroy", :id => "1")
    end

  end
end
