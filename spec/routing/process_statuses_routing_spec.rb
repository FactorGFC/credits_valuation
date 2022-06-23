require "rails_helper"

RSpec.describe ProcessStatusesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/process_statuses").to route_to("process_statuses#index")
    end

    it "routes to #new" do
      expect(get: "/process_statuses/new").to route_to("process_statuses#new")
    end

    it "routes to #show" do
      expect(get: "/process_statuses/1").to route_to("process_statuses#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/process_statuses/1/edit").to route_to("process_statuses#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/process_statuses").to route_to("process_statuses#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/process_statuses/1").to route_to("process_statuses#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/process_statuses/1").to route_to("process_statuses#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/process_statuses/1").to route_to("process_statuses#destroy", id: "1")
    end
  end
end
