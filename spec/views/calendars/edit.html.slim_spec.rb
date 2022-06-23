require 'rails_helper'

RSpec.describe "calendars/edit", type: :view do
  before(:each) do
    @calendar = assign(:calendar, Calendar.create!(
      period_type: "MyString",
      string: "MyString",
      year: "MyString",
      period: "MyString"
    ))
  end

  it "renders the edit calendar form" do
    render

    assert_select "form[action=?][method=?]", calendar_path(@calendar), "post" do

      assert_select "input[name=?]", "calendar[period_type]"

      assert_select "input[name=?]", "calendar[string]"

      assert_select "input[name=?]", "calendar[year]"

      assert_select "input[name=?]", "calendar[period]"
    end
  end
end
