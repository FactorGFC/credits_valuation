require 'rails_helper'

RSpec.describe "company_providers/index", type: :view do
  before(:each) do
    assign(:company_providers, [
      CompanyProvider.create!(
        :name => "Name",
        :purchase => "Purchase",
        :credit => "Credit"
      ),
      CompanyProvider.create!(
        :name => "Name",
        :purchase => "Purchase",
        :credit => "Credit"
      )
    ])
  end

  it "renders a list of company_providers" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Purchase".to_s, :count => 2
    assert_select "tr>td", :text => "Credit".to_s, :count => 2
  end
end
