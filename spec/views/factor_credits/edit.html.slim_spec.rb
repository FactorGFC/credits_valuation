require 'rails_helper'

RSpec.describe "factor_credits/edit", type: :view do
  before(:each) do
    @factor_credit = assign(:factor_credit, FactorCredit.create!(
      name: "MyString",
      description: "MyString",
      active: false,
      order: 1
    ))
  end

  it "renders the edit factor_credit form" do
    render

    assert_select "form[action=?][method=?]", factor_credit_path(@factor_credit), "post" do

      assert_select "input[name=?]", "factor_credit[name]"

      assert_select "input[name=?]", "factor_credit[description]"

      assert_select "input[name=?]", "factor_credit[active]"

      assert_select "input[name=?]", "factor_credit[order]"
    end
  end
end
