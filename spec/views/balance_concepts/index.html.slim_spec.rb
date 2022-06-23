require 'rails_helper'

RSpec.describe "balance_concepts/index", type: :view do
  before(:each) do
    assign(:balance_concepts, [
      BalanceConcept.create!(
        :name => "Name",
        :key => "Key",
        :active => false,
        :ancestry => "Ancestry"
      ),
      BalanceConcept.create!(
        :name => "Name",
        :key => "Key",
        :active => false,
        :ancestry => "Ancestry"
      )
    ])
  end

  it "renders a list of balance_concepts" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Key".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => "Ancestry".to_s, :count => 2
  end
end
