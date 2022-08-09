require 'rails_helper'

RSpec.describe "conciliation_concepts/show", type: :view do
  before(:each) do
    @conciliation_concept = assign(:conciliation_concept, ConciliationConcept.create!(
      name: "Name",
      key: "Key",
      active: false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Key/)
    expect(rendered).to match(/false/)
  end
end
