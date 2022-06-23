require 'rails_helper'

RSpec.describe "calendar_years/new", type: :view do
  before(:each) do
    assign(:calendar_year, CalendarYear.new(
      :name => "MyString",
      :year => "MyString",
      :active => false
    ))
  end

  it "renders new calendar_year form" do
    render

    assert_select "form[action=?][method=?]", calendar_years_path, "post" do

      assert_select "input[name=?]", "calendar_year[name]"

      assert_select "input[name=?]", "calendar_year[year]"

      assert_select "input[name=?]", "calendar_year[active]"
    end
  end
end
