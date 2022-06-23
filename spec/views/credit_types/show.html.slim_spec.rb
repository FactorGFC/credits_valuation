require 'rails_helper'

RSpec.describe "credit_types/show", type: :view do
  before(:each) do
    @credit_type = assign(:credit_type, CreditType.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
