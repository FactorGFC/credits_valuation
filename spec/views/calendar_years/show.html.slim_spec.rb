require 'rails_helper'

RSpec.describe "calendar_years/show", type: :view do
  before(:each) do
    @calendar_year = assign(:calendar_year, CalendarYear.create!(
      :name => "Name",
      :year => "Year",
      :active => false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Year/)
    expect(rendered).to match(/false/)
  end
end
