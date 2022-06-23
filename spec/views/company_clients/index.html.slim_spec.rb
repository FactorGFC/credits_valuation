require 'rails_helper'

RSpec.describe "company_clients/index", type: :view do
  before(:each) do
    assign(:company_clients, [
      CompanyClient.create!(
        :name => "Name",
        :sales => "Sales",
        :credit => "Credit"
      ),
      CompanyClient.create!(
        :name => "Name",
        :sales => "Sales",
        :credit => "Credit"
      )
    ])
  end

  it "renders a list of company_clients" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Sales".to_s, :count => 2
    assert_select "tr>td", :text => "Credit".to_s, :count => 2
  end
end
