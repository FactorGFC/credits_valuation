require 'rails_helper'

RSpec.describe "company_providers/show", type: :view do
  before(:each) do
    @company_provider = assign(:company_provider, CompanyProvider.create!(
      :name => "Name",
      :purchase => "Purchase",
      :credit => "Credit"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Purchase/)
    expect(rendered).to match(/Credit/)
  end
end
