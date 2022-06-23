require 'rails_helper'

RSpec.describe "number_collaborators/new", type: :view do
  before(:each) do
    assign(:number_collaborator, NumberCollaborator.new())
  end

  it "renders new number_collaborator form" do
    render

    assert_select "form[action=?][method=?]", number_collaborators_path, "post" do
    end
  end
end
