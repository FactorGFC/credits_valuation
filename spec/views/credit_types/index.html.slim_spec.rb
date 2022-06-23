require 'rails_helper'

RSpec.describe "credit_types/index", type: :view do
  before(:each) do
    assign(:credit_types, [
      CreditType.create!(
        :name => "Name"
      ),
      CreditType.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of credit_types" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
