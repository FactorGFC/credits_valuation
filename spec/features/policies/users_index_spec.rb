require 'rails_helper'

RSpec.feature 'Users index', type: :feature do
  let(:user) {
    role = create(:role, :god)
    create(:user, role: role, phone: '123123123')
  }

  let(:role){
    create(:role)
  }

  before(:example) do
    login(user.email, user.password)
  end

  # Descomentar cuando esté listo el feature de implementación de policies
  scenario 'current user not in users list', js: true do
    create(:user, :default, role: role, phone: '123123123')


    visit '/users/'

    expect(find('table')).to have_no_content('god@fg.mx')
  end

end
