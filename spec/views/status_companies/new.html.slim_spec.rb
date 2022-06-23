require 'rails_helper'

RSpec.describe "status_companies/new", type: :view do
  before(:each) do
    assign(:status_company, StatusCompany.new())
  end

  it "renders new status_company form" do
    render

    assert_select "form[action=?][method=?]", status_companies_path, "post" do
    end
  end
end
