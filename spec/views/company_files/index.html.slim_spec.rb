require 'rails_helper'

RSpec.describe "company_files/index", type: :view do
  before(:each) do
    assign(:company_files, [
      CompanyFile.create!(),
      CompanyFile.create!()
    ])
  end

  it "renders a list of company_files" do
    render
  end
end
