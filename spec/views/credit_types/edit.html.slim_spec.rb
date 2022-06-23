require 'rails_helper'

RSpec.describe "credit_types/edit", type: :view do
  before(:each) do
    @credit_type = assign(:credit_type, CreditType.create!(
      :name => "MyString"
    ))
  end

  it "renders the edit credit_type form" do
    render

    assert_select "form[action=?][method=?]", credit_type_path(@credit_type), "post" do

      assert_select "input[name=?]", "credit_type[name]"
    end
  end
end
