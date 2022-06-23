require 'rails_helper'

RSpec.describe "calendars/new", type: :view do
  before(:each) do
    assign(:calendar, Calendar.new(
      period_type: "MyString",
      string: "MyString",
      year: "MyString",
      period: "MyString"
    ))
  end

  it "renders new calendar form" do
    render

    assert_select "form[action=?][method=?]", calendars_path, "post" do

      assert_select "input[name=?]", "calendar[period_type]"

      assert_select "input[name=?]", "calendar[string]"

      assert_select "input[name=?]", "calendar[year]"

      assert_select "input[name=?]", "calendar[period]"
    end
  end
end
