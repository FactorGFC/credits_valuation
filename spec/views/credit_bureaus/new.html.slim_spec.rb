require 'rails_helper'

RSpec.describe "credit_bureaus/new", type: :view do
  before(:each) do
    assign(:credit_bureau, CreditBureau.new())
  end

  it "renders new credit_bureau form" do
    render

    assert_select "form[action=?][method=?]", credit_bureaus_path, "post" do
    end
  end
end
