require 'rails_helper'

RSpec.describe "income_statement_concepts/new", type: :view do
  before(:each) do
    assign(:statement_of_income_concept, StatementOfIncomeConcept.new(
      name: "MyString",
      key: "MyString",
      active: false,
      ancestry: "MyString"
    ))
  end

  it "renders new statement_of_income_concept form" do
    render

    assert_select "form[action=?][method=?]", income_statement_concepts_path, "post" do

      assert_select "input[name=?]", "statement_of_income_concept[name]"

      assert_select "input[name=?]", "statement_of_income_concept[key]"

      assert_select "input[name=?]", "statement_of_income_concept[active]"

      assert_select "input[name=?]", "statement_of_income_concept[ancestry]"
    end
  end
end
