require 'rails_helper'

RSpec.describe "financial_institutions/index", type: :view do
  before(:each) do
    assign(:financial_institutions, [
      FinancialInstitution.create!(),
      FinancialInstitution.create!()
    ])
  end

  it "renders a list of financial_institutions" do
    render
  end
end
