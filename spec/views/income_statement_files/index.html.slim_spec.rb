require 'rails_helper'

RSpec.describe "income_statement_files/index", type: :view do
  before(:each) do
    assign(:income_statement_files, [
      IncomeStatementFile.create!(),
      IncomeStatementFile.create!()
    ])
  end

  it "renders a list of income_statement_files" do
    render
  end
end
