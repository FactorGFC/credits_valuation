require 'rails_helper'

RSpec.describe "status_companies/index", type: :view do
  before(:each) do
    assign(:status_companies, [
      StatusCompany.create!(),
      StatusCompany.create!()
    ])
  end

  it "renders a list of status_companies" do
    render
  end
end
