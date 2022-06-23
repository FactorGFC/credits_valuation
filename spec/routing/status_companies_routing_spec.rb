require "rails_helper"

RSpec.describe StatusCompaniesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/status_companies").to route_to("status_companies#index")
    end

    it "routes to #new" do
      expect(:get => "/status_companies/new").to route_to("status_companies#new")
    end

    it "routes to #show" do
      expect(:get => "/status_companies/1").to route_to("status_companies#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/status_companies/1/edit").to route_to("status_companies#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/status_companies").to route_to("status_companies#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/status_companies/1").to route_to("status_companies#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/status_companies/1").to route_to("status_companies#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/status_companies/1").to route_to("status_companies#destroy", :id => "1")
    end

  end
end
