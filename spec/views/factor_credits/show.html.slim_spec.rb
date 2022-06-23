require 'rails_helper'

RSpec.describe "factor_credits/show", type: :view do
  before(:each) do
    @factor_credit = assign(:factor_credit, FactorCredit.create!(
      name: "Name",
      description: "Description",
      active: false,
      order: 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Description/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/2/)
  end
end
