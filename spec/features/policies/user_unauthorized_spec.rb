require 'rails_helper'

RSpec.feature 'User unauthorized', type: :feature do
  let(:user) {
    role = create(:role, :god)
    create(:user, role: role, phone: '123123123')
  }

  before(:example) do
    login(user.email, user.password)
  end


=begin
  scenario 'redirected to not found page', js: true do
    visit '/factor_test_error/'

    expect(page).to have_content("Puma caught this error: No route matches [GET]")
  end
=end
end
