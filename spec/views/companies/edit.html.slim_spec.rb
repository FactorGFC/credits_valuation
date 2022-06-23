require 'rails_helper'

RSpec.describe "companies/edit", type: :view do
  before(:each) do
    @company = assign(:company, Company.create!(
      :rfc => "MyString",
      :address => "MyString",
      :name => "MyString"
    ))
  end

  it "renders the edit companies form" do
    render

    assert_select "form[action=?][method=?]", company_path(@company), "post" do

      assert_select "input[name=?]", "companies[rfc]"

      assert_select "input[name=?]", "companies[address]"

      assert_select "input[name=?]", "companies[name]"
    end
  end
end
