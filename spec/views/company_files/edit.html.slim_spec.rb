require 'rails_helper'

RSpec.describe "company_files/edit", type: :view do
  before(:each) do
    @company_file = assign(:company_file, CompanyFile.create!())
  end

  it "renders the edit company_file form" do
    render

    assert_select "form[action=?][method=?]", company_file_path(@company_file), "post" do
    end
  end
end
