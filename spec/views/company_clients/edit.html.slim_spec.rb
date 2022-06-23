require 'rails_helper'

RSpec.describe "company_clients/edit", type: :view do
  before(:each) do
    @company_client = assign(:company_client, CompanyClient.create!(
      :name => "MyString",
      :sales => "MyString",
      :credit => "MyString"
    ))
  end

  it "renders the edit company_client form" do
    render

    assert_select "form[action=?][method=?]", company_client_path(@company_client), "post" do

      assert_select "input[name=?]", "company_client[name]"

      assert_select "input[name=?]", "company_client[sales]"

      assert_select "input[name=?]", "company_client[credit]"
    end
  end
end
