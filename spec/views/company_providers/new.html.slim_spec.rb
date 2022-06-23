require 'rails_helper'

RSpec.describe "company_providers/new", type: :view do
  before(:each) do
    assign(:company_provider, CompanyProvider.new(
      :name => "MyString",
      :purchase => "MyString",
      :credit => "MyString"
    ))
  end

  it "renders new company_provider form" do
    render

    assert_select "form[action=?][method=?]", company_providers_path, "post" do

      assert_select "input[name=?]", "company_provider[name]"

      assert_select "input[name=?]", "company_provider[purchase]"

      assert_select "input[name=?]", "company_provider[credit]"
    end
  end
end
