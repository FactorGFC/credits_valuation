require 'rails_helper'

RSpec.describe "company_providers/edit", type: :view do
  before(:each) do
    @company_provider = assign(:company_provider, CompanyProvider.create!(
      :name => "MyString",
      :purchase => "MyString",
      :credit => "MyString"
    ))
  end

  it "renders the edit company_provider form" do
    render

    assert_select "form[action=?][method=?]", company_provider_path(@company_provider), "post" do

      assert_select "input[name=?]", "company_provider[name]"

      assert_select "input[name=?]", "company_provider[purchase]"

      assert_select "input[name=?]", "company_provider[credit]"
    end
  end
end
