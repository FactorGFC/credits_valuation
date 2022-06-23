require 'rails_helper'

RSpec.describe "status_companies/edit", type: :view do
  before(:each) do
    @status_company = assign(:status_company, StatusCompany.create!())
  end

  it "renders the edit status_company form" do
    render

    assert_select "form[action=?][method=?]", status_company_path(@status_company), "post" do
    end
  end
end
