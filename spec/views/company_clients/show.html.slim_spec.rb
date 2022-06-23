require 'rails_helper'

RSpec.describe "company_clients/show", type: :view do
  before(:each) do
    @company_client = assign(:company_client, CompanyClient.create!(
      :name => "Name",
      :sales => "Sales",
      :credit => "Credit"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Sales/)
    expect(rendered).to match(/Credit/)
  end
end
