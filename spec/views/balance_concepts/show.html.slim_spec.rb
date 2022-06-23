require 'rails_helper'

RSpec.describe "balance_concepts/show", type: :view do
  before(:each) do
    @balance_concept = assign(:balance_concept, BalanceConcept.create!(
      :name => "Name",
      :key => "Key",
      :active => false,
      :ancestry => "Ancestry"
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
