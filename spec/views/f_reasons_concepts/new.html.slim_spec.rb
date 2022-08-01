require 'rails_helper'

RSpec.describe "f_reasons_concepts/new", type: :view do
  before(:each) do
    assign(:f_reasons_concept, FReasonsConcept.new(
      name: "MyString",
      key: "MyString",
      formula: "MyString",
      description: "MyString"
    ))
  end

  it "renders new f_reasons_concept form" do
    render

    assert_select "form[action=?][method=?]", f_reasons_concepts_path, "post" do

      assert_select "input[name=?]", "f_reasons_concept[name]"

      assert_select "input[name=?]", "f_reasons_concept[key]"

      assert_select "input[name=?]", "f_reasons_concept[formula]"

      assert_select "input[name=?]", "f_reasons_concept[description]"
    end
  end
end
