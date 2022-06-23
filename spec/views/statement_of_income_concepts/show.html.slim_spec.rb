require 'rails_helper'

RSpec.describe "income_statement_concepts/show", type: :view do
  before(:each) do
    @statement_of_income_concept = assign(:statement_of_income_concept, StatementOfIncomeConcept.create!(
      name: "Name",
      key: "Key",
      active: false,
      ancestry: "Ancestry"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Key/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/Ancestry/)
  end
end
