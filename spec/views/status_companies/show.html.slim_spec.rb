require 'rails_helper'

RSpec.describe "status_companies/show", type: :view do
  before(:each) do
    @status_company = assign(:status_company, StatusCompany.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
