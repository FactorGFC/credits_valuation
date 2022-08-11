require 'rails_helper'

RSpec.describe "f_reasons_concepts/edit", type: :view do
  before(:each) do
    @f_reasons_concept = assign(:f_reasons_concept, FReasonsConcept.create!(
      name: "MyString",
      key: "MyString",
      formula: "MyString",
      description: "MyString"
    ))
  end

  it "renders the edit f_reasons_concept form" do
    render

    assert_select "form[action=?][method=?]", f_reasons_concept_path(@f_reasons_concept), "post" do

      assert_select "input[name=?]", "f_reasons_concept[name]"

      assert_select "input[name=?]", "f_reasons_concept[key]"

      assert_select "input[name=?]", "f_reasons_concept[formula]"

      assert_select "input[name=?]", "f_reasons_concept[description]"
    end
  end
end
