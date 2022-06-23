require "rails_helper"

RSpec.describe NumberCollaboratorsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/number_collaborators").to route_to("number_collaborators#index")
    end

    it "routes to #new" do
      expect(:get => "/number_collaborators/new").to route_to("number_collaborators#new")
    end

    it "routes to #show" do
      expect(:get => "/number_collaborators/1").to route_to("number_collaborators#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/number_collaborators/1/edit").to route_to("number_collaborators#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/number_collaborators").to route_to("number_collaborators#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/number_collaborators/1").to route_to("number_collaborators#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/number_collaborators/1").to route_to("number_collaborators#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/number_collaborators/1").to route_to("number_collaborators#destroy", :id => "1")
    end

  end
end
