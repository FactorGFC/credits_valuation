require 'rails_helper'

RSpec.describe "credit_bureaus/index", type: :view do
  before(:each) do
    assign(:credit_bureaus, [
      CreditBureau.create!(),
      CreditBureau.create!()
    ])
  end

  it "renders a list of credit_bureaus" do
    render
  end
end
