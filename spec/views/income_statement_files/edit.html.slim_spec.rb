require 'rails_helper'

RSpec.describe "income_statement_files/edit", type: :view do
  before(:each) do
    @income_statement_file = assign(:income_statement_file, IncomeStatementFile.create!())
  end

  it "renders the edit income_statement_file form" do
    render

    assert_select "form[action=?][method=?]", income_statement_file_path(@income_statement_file), "post" do
    end
  end
end
