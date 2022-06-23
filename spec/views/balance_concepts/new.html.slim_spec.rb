require 'rails_helper'

RSpec.describe "balance_concepts/new", type: :view do
  before(:each) do
    assign(:balance_concept, BalanceConcept.new(
      :name => "MyString",
      :key => "MyString",
      :active => false,
      :ancestry => "MyString"
    ))
  end

  it "renders new balance_concepts form" do
    render

    assert_select "form[action=?][method=?]", balance_concepts_path, "post" do

      assert_select "input[name=?]", "balance_concepts[name]"

      assert_select "input[name=?]", "balance_concepts[key]"

      assert_select "input[name=?]", "balance_concepts[active]"

      assert_select "input[name=?]", "balance_concepts[ancestry]"
    end
  end
end
