require 'rails_helper'

RSpec.describe "income_statement_files/show", type: :view do
  before(:each) do
    @income_statement_file = assign(:income_statement_file, IncomeStatementFile.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
