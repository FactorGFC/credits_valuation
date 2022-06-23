require 'rails_helper'

RSpec.describe "process_statuses/index", type: :view do
  before(:each) do
    assign(:process_statuses, [
      ProcessStatus.create!(
        name: "Name",
        key: "Key",
        order: 2,
        active: false
      ),
      ProcessStatus.create!(
        name: "Name",
        key: "Key",
        order: 2,
        active: false
      )
    ])
  end

  it "renders a list of process_statuses" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Key".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: false.to_s, count: 2
  end
end
