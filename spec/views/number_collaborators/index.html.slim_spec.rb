require 'rails_helper'

RSpec.describe "number_collaborators/index", type: :view do
  before(:each) do
    assign(:number_collaborators, [
      NumberCollaborator.create!(),
      NumberCollaborator.create!()
    ])
  end

  it "renders a list of number_collaborators" do
    render
  end
end
