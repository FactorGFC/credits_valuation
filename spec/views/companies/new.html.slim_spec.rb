require 'rails_helper'

RSpec.describe "companies/new", type: :view do
  before(:each) do
    assign(:company, Company.new(
      :rfc => "MyString",
      :address => "MyString",
      :name => "MyString"
    ))
  end

  it "renders new companies form" do
    render

    assert_select "form[action=?][method=?]", companies_path, "post" do

      assert_select "input[name=?]", "companies[rfc]"

      assert_select "input[name=?]", "companies[address]"

      assert_select "input[name=?]", "companies[name]"
    end
  end
end
