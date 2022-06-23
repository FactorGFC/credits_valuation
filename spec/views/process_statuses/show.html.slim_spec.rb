require 'rails_helper'

RSpec.describe "process_statuses/show", type: :view do
  before(:each) do
    @process_status = assign(:process_status, ProcessStatus.create!(
      name: "Name",
      key: "Key",
      order: 2,
      active: false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Key/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/false/)
  end
end
