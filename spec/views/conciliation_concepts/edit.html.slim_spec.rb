require 'rails_helper'

RSpec.describe "conciliation_concepts/edit", type: :view do
  before(:each) do
    @conciliation_concept = assign(:conciliation_concept, ConciliationConcept.create!(
      name: "MyString",
      key: "MyString",
      active: false
    ))
  end

  it "renders the edit conciliation_concept form" do
    render

    assert_select "form[action=?][method=?]", conciliation_concept_path(@conciliation_concept), "post" do

      assert_select "input[name=?]", "conciliation_concept[name]"

      assert_select "input[name=?]", "conciliation_concept[key]"

      assert_select "input[name=?]", "conciliation_concept[active]"
    end
  end
end
