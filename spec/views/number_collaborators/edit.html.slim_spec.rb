require 'rails_helper'

RSpec.describe "number_collaborators/edit", type: :view do
  before(:each) do
    @number_collaborator = assign(:number_collaborator, NumberCollaborator.create!())
  end

  it "renders the edit number_collaborator form" do
    render

    assert_select "form[action=?][method=?]", number_collaborator_path(@number_collaborator), "post" do
    end
  end
end
