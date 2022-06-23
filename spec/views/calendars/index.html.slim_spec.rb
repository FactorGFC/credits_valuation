require 'rails_helper'

RSpec.describe "calendars/index", type: :view do
  before(:each) do
    assign(:calendars, [
      Calendar.create!(
        period_type: "Period Type",
        string: "String",
        year: "Year",
        period: "Period"
      ),
      Calendar.create!(
        period_type: "Period Type",
        string: "String",
        year: "Year",
        period: "Period"
      )
    ])
  end

  it "renders a list of calendars" do
    render
    assert_select "tr>td", text: "Period Type".to_s, count: 2
    assert_select "tr>td", text: "String".to_s, count: 2
    assert_select "tr>td", text: "Year".to_s, count: 2
    assert_select "tr>td", text: "Period".to_s, count: 2
  end
end
