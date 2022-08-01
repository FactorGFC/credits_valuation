require 'rails_helper'

RSpec.describe "f_reasons_concepts/show", type: :view do
  before(:each) do
    @f_reasons_concept = assign(:f_reasons_concept, FReasonsConcept.create!(
      name: "Name",
      key: "Key",
      formula: "Formula",
      description: "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Key/)
    expect(rendered).to match(/Formula/)
    expect(rendered).to match(/Description/)
  end
end
