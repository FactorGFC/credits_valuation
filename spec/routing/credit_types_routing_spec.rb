require "rails_helper"

RSpec.describe CreditTypesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/credit_types").to route_to("credit_types#index")
    end

    it "routes to #new" do
      expect(:get => "/credit_types/new").to route_to("credit_types#new")
    end

    it "routes to #show" do
      expect(:get => "/credit_types/1").to route_to("credit_types#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/credit_types/1/edit").to route_to("credit_types#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/credit_types").to route_to("credit_types#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/credit_types/1").to route_to("credit_types#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/credit_types/1").to route_to("credit_types#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/credit_types/1").to route_to("credit_types#destroy", :id => "1")
    end

  end
end
