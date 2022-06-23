require 'rails_helper'

RSpec.describe "credit_bureaus/show", type: :view do
  before(:each) do
    @credit_bureau = assign(:credit_bureau, CreditBureau.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
