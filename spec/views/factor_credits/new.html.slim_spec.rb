require 'rails_helper'

RSpec.describe "factor_credits/new", type: :view do
  before(:each) do
    assign(:factor_credit, FactorCredit.new(
      name: "MyString",
      description: "MyString",
      active: false,
      order: 1
    ))
  end

  it "renders new factor_credit form" do
    render

    assert_select "form[action=?][method=?]", factor_credits_path, "post" do

      assert_select "input[name=?]", "factor_credit[name]"

      assert_select "input[name=?]", "factor_credit[description]"

      assert_select "input[name=?]", "factor_credit[active]"

      assert_select "input[name=?]", "factor_credit[order]"
    end
  end
end
