require 'rails_helper'

RSpec.describe "company_files/show", type: :view do
  before(:each) do
    @company_file = assign(:company_file, CompanyFile.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
