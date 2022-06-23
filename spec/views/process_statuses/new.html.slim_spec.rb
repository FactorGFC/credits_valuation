require 'rails_helper'

RSpec.describe "process_statuses/new", type: :view do
  before(:each) do
    assign(:process_status, ProcessStatus.new(
      name: "MyString",
      key: "MyString",
      order: 1,
      active: false
    ))
  end

  it "renders new process_status form" do
    render

    assert_select "form[action=?][method=?]", process_statuses_path, "post" do

      assert_select "input[name=?]", "process_status[name]"

      assert_select "input[name=?]", "process_status[key]"

      assert_select "input[name=?]", "process_status[order]"

      assert_select "input[name=?]", "process_status[active]"
    end
  end
end
