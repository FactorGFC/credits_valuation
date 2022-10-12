require 'rails_helper'

RSpec.describe "conciliation_concepts/index", type: :view do
  before(:each) do
    assign(:conciliation_concepts, [
      ConciliationConcept.create!(
        name: "Name",
        key: "Key",
        active: false
      ),
      ConciliationConcept.create!(
        name: "Name",
        key: "Key",
        active: false
      )
    ])
  end

  it "renders a list of conciliation_concepts" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Key".to_s, count: 2
    assert_select "tr>td", text: false.to_s, count: 2
  end
end
