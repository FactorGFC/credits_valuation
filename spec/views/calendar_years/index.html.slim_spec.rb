require 'rails_helper'

RSpec.describe "calendar_years/index", type: :view do
  before(:each) do
    assign(:calendar_years, [
      CalendarYear.create!(
        :name => "Name",
        :year => "Year",
        :active => false
      ),
      CalendarYear.create!(
        :name => "Name",
        :year => "Year",
        :active => false
      )
    ])
  end

  it "renders a list of calendar_years" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Year".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
