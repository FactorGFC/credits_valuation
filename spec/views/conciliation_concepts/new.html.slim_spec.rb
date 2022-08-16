require 'rails_helper'

RSpec.describe "conciliation_concepts/new", type: :view do
  before(:each) do
    assign(:conciliation_concept, ConciliationConcept.new(
      name: "MyString",
      key: "MyString",
      active: false
    ))
  end

  it "renders new conciliation_concept form" do
    render

    assert_select "form[action=?][method=?]", conciliation_concepts_path, "post" do

      assert_select "input[name=?]", "conciliation_concept[name]"

      assert_select "input[name=?]", "conciliation_concept[key]"

      assert_select "input[name=?]", "conciliation_concept[active]"
    end
  end
end
