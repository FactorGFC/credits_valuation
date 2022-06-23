require 'rails_helper'

RSpec.describe "income_statement_concepts/index", type: :view do
  before(:each) do
    assign(:income_statement_concepts, [
      StatementOfIncomeConcept.create!(
        name: "Name",
        key: "Key",
        active: false,
        ancestry: "Ancestry"
      ),
      StatementOfIncomeConcept.create!(
        name: "Name",
        key: "Key",
        active: false,
        ancestry: "Ancestry"
      )
    ])
  end

  it "renders a list of income_statement_concepts" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Key".to_s, count: 2
    assert_select "tr>td", text: false.to_s, count: 2
    assert_select "tr>td", text: "Ancestry".to_s, count: 2
  end
end
