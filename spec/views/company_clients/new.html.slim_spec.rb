require 'rails_helper'

RSpec.describe "company_clients/new", type: :view do
  before(:each) do
    assign(:company_client, CompanyClient.new(
      :name => "MyString",
      :sales => "MyString",
      :credit => "MyString"
    ))
  end

  it "renders new company_client form" do
    render

    assert_select "form[action=?][method=?]", company_clients_path, "post" do

      assert_select "input[name=?]", "company_client[name]"

      assert_select "input[name=?]", "company_client[sales]"

      assert_select "input[name=?]", "company_client[credit]"
    end
  end
end
