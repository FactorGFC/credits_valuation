require 'rails_helper'

RSpec.describe "credit_types/new", type: :view do
  before(:each) do
    assign(:credit_type, CreditType.new(
      :name => "MyString"
    ))
  end

  it "renders new credit_type form" do
    render

    assert_select "form[action=?][method=?]", credit_types_path, "post" do

      assert_select "input[name=?]", "credit_type[name]"
    end
  end
end
