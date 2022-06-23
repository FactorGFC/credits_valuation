require 'rails_helper'

RSpec.describe "requests/index", type: :view do
  before(:each) do
    assign(:requests, [
      Request.create!(
        company: nil,
        credit_type: nil,
        process_status: nil,
        user: nil
      ),
      Request.create!(
        company: nil,
        credit_type: nil,
        process_status: nil,
        user: nil
      )
    ])
  end

  it "renders a list of requests" do
    render
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
