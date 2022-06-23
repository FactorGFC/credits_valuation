require "rails_helper"

RSpec.describe CompanyClientsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/company_clients").to route_to("company_clients#index")
    end

    it "routes to #new" do
      expect(:get => "/company_clients/new").to route_to("company_clients#new")
    end

    it "routes to #show" do
      expect(:get => "/company_clients/1").to route_to("company_clients#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/company_clients/1/edit").to route_to("company_clients#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/company_clients").to route_to("company_clients#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/company_clients/1").to route_to("company_clients#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/company_clients/1").to route_to("company_clients#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/company_clients/1").to route_to("company_clients#destroy", :id => "1")
    end

  end
end
