require 'rails_helper'

RSpec.describe "financial_institutions/edit", type: :view do
  before(:each) do
    @financial_institution = assign(:financial_institution, FinancialInstitution.create!())
  end

  it "renders the edit financial_institution form" do
    render

    assert_select "form[action=?][method=?]", financial_institution_path(@financial_institution), "post" do
    end
  end
end
