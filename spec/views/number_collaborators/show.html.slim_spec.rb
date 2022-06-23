require 'rails_helper'

RSpec.describe "number_collaborators/show", type: :view do
  before(:each) do
    @number_collaborator = assign(:number_collaborator, NumberCollaborator.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
