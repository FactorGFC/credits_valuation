require 'rails_helper'

RSpec.describe "calendar_years/edit", type: :view do
  before(:each) do
    @calendar_year = assign(:calendar_year, CalendarYear.create!(
      :name => "MyString",
      :year => "MyString",
      :active => false
    ))
  end

  it "renders the edit calendar_year form" do
    render

    assert_select "form[action=?][method=?]", calendar_year_path(@calendar_year), "post" do

      assert_select "input[name=?]", "calendar_year[name]"

      assert_select "input[name=?]", "calendar_year[year]"

      assert_select "input[name=?]", "calendar_year[active]"
    end
  end
end
