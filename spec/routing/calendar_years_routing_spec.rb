require "rails_helper"

RSpec.describe CalendarYearsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/calendar_years").to route_to("calendar_years#index")
    end

    it "routes to #new" do
      expect(:get => "/calendar_years/new").to route_to("calendar_years#new")
    end

    it "routes to #show" do
      expect(:get => "/calendar_years/1").to route_to("calendar_years#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/calendar_years/1/edit").to route_to("calendar_years#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/calendar_years").to route_to("calendar_years#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/calendar_years/1").to route_to("calendar_years#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/calendar_years/1").to route_to("calendar_years#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/calendar_years/1").to route_to("calendar_years#destroy", :id => "1")
    end

  end
end
