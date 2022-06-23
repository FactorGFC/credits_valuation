require 'rails_helper'

RSpec.describe "financial_institutions/show", type: :view do
  before(:each) do
    @financial_institution = assign(:financial_institution, FinancialInstitution.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
