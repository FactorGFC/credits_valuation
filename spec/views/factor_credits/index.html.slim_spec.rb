require 'rails_helper'

RSpec.describe "factor_credits/index", type: :view do
  before(:each) do
    assign(:factor_credits, [
      FactorCredit.create!(
        name: "Name",
        description: "Description",
        active: false,
        order: 2
      ),
      FactorCredit.create!(
        name: "Name",
        description: "Description",
        active: false,
        order: 2
      )
    ])
  end

  it "renders a list of factor_credits" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Description".to_s, count: 2
    assert_select "tr>td", text: false.to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
  end
end
