require 'rails_helper'

RSpec.describe "financial_institutions/new", type: :view do
  before(:each) do
    assign(:financial_institution, FinancialInstitution.new())
  end

  it "renders new financial_institution form" do
    render

    assert_select "form[action=?][method=?]", financial_institutions_path, "post" do
    end
  end
end
