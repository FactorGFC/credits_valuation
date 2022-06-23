require 'rails_helper'

RSpec.describe "requests/edit", type: :view do
  before(:each) do
    @request = assign(:request, Request.create!(
      company: nil,
      credit_type: nil,
      process_status: nil,
      user: nil
    ))
  end

  it "renders the edit request form" do
    render

    assert_select "form[action=?][method=?]", request_path(@request), "post" do

      assert_select "input[name=?]", "request[company_id]"

      assert_select "input[name=?]", "request[credit_type_id]"

      assert_select "input[name=?]", "request[process_status_id]"

      assert_select "input[name=?]", "request[user_id]"
    end
  end
end
