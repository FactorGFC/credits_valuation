require 'rails_helper'

RSpec.describe "income_statement_files/new", type: :view do
  before(:each) do
    assign(:income_statement_file, IncomeStatementFile.new())
  end

  it "renders new income_statement_file form" do
    render

    assert_select "form[action=?][method=?]", income_statement_files_path, "post" do
    end
  end
end
