require 'rails_helper'

RSpec.describe "credit_bureaus/edit", type: :view do
  before(:each) do
    @credit_bureau = assign(:credit_bureau, CreditBureau.create!())
  end

  it "renders the edit credit_bureau form" do
    render

    assert_select "form[action=?][method=?]", credit_bureau_path(@credit_bureau), "post" do
    end
  end
end
