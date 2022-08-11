require 'rails_helper'

RSpec.describe "f_reasons_concepts/index", type: :view do
  before(:each) do
    assign(:f_reasons_concepts, [
      FReasonsConcept.create!(
        name: "Name",
        key: "Key",
        formula: "Formula",
        description: "Description"
      ),
      FReasonsConcept.create!(
        name: "Name",
        key: "Key",
        formula: "Formula",
        description: "Description"
      )
    ])
  end

  it "renders a list of f_reasons_concepts" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Key".to_s, count: 2
    assert_select "tr>td", text: "Formula".to_s, count: 2
    assert_select "tr>td", text: "Description".to_s, count: 2
  end
end
