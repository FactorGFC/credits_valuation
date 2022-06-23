require 'rails_helper'

RSpec.describe "company_files/new", type: :view do
  before(:each) do
    assign(:company_file, CompanyFile.new())
  end

  it "renders new company_file form" do
    render

    assert_select "form[action=?][method=?]", company_files_path, "post" do
    end
  end
end
