require 'rails_helper'

RSpec.describe "calendars/show", type: :view do
  before(:each) do
    @calendar = assign(:calendar, Calendar.create!(
      period_type: "Period Type",
      string: "String",
      year: "Year",
      period: "Period"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Period Type/)
    expect(rendered).to match(/String/)
    expect(rendered).to match(/Year/)
    expect(rendered).to match(/Period/)
  end
end
