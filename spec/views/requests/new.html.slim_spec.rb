require 'rails_helper'

RSpec.describe "requests/new", type: :view do
  before(:each) do
    assign(:request, Request.new(
      company: nil,
      credit_type: nil,
      process_status: nil,
      user: nil
    ))
  end

  it "renders new request form" do
    render

    assert_select "form[action=?][method=?]", requests_path, "post" do

      assert_select "input[name=?]", "request[company_id]"

      assert_select "input[name=?]", "request[credit_type_id]"

      assert_select "input[name=?]", "request[process_status_id]"

      assert_select "input[name=?]", "request[user_id]"
    end
  end
end
