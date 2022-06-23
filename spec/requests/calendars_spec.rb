require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/calendars", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # Calendar. As you add validations to Calendar, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Calendar.create! valid_attributes
      get calendars_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      calendar = Calendar.create! valid_attributes
      get calendar_url(calendar)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_calendar_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      calendar = Calendar.create! valid_attributes
      get edit_calendar_url(calendar)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Calendar" do
        expect {
          post calendars_url, params: { calendar: valid_attributes }
        }.to change(Calendar, :count).by(1)
      end

      it "redirects to the created calendar" do
        post calendars_url, params: { calendar: valid_attributes }
        expect(response).to redirect_to(calendar_url(Calendar.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Calendar" do
        expect {
          post calendars_url, params: { calendar: invalid_attributes }
        }.to change(Calendar, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post calendars_url, params: { calendar: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested calendar" do
        calendar = Calendar.create! valid_attributes
        patch calendar_url(calendar), params: { calendar: new_attributes }
        calendar.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the calendar" do
        calendar = Calendar.create! valid_attributes
        patch calendar_url(calendar), params: { calendar: new_attributes }
        calendar.reload
        expect(response).to redirect_to(calendar_url(calendar))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        calendar = Calendar.create! valid_attributes
        patch calendar_url(calendar), params: { calendar: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested calendar" do
      calendar = Calendar.create! valid_attributes
      expect {
        delete calendar_url(calendar)
      }.to change(Calendar, :count).by(-1)
    end

    it "redirects to the calendars list" do
      calendar = Calendar.create! valid_attributes
      delete calendar_url(calendar)
      expect(response).to redirect_to(calendars_url)
    end
  end
end
