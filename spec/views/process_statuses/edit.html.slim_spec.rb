require 'rails_helper'

RSpec.describe "process_statuses/edit", type: :view do
  before(:each) do
    @process_status = assign(:process_status, ProcessStatus.create!(
      name: "MyString",
      key: "MyString",
      order: 1,
      active: false
    ))
  end

  it "renders the edit process_status form" do
    render

    assert_select "form[action=?][method=?]", process_status_path(@process_status), "post" do

      assert_select "input[name=?]", "process_status[name]"

      assert_select "input[name=?]", "process_status[key]"

      assert_select "input[name=?]", "process_status[order]"

      assert_select "input[name=?]", "process_status[active]"
    end
  end
end
