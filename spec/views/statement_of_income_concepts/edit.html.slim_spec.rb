require 'rails_helper'

RSpec.describe "income_statement_concepts/edit", type: :view do
  before(:each) do
    @statement_of_income_concept = assign(:statement_of_income_concept, StatementOfIncomeConcept.create!(
      name: "MyString",
      key: "MyString",
      active: false,
      ancestry: "MyString"
    ))
  end

  it "renders the edit statement_of_income_concept form" do
    render

    assert_select "form[action=?][method=?]", statement_of_income_concept_path(@statement_of_income_concept), "post" do

      assert_select "input[name=?]", "statement_of_income_concept[name]"

      assert_select "input[name=?]", "statement_of_income_concept[key]"

      assert_select "input[name=?]", "statement_of_income_concept[active]"

      assert_select "input[name=?]", "statement_of_income_concept[ancestry]"
    end
  end
end
