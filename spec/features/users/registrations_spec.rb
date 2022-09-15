require 'rails_helper'

RSpec.feature 'Registrations', type: :feature do
  let(:user) {
    role = create(:role, :god)
    create(:user, role: role, phone: '123123123')
  }

  before(:example) do
    sign_in(user)
  end


  scenario 'creates a user', js: true do
    visit '/users/new'

    fill_in t('activerecord.attributes.user.first_name'), with: 'First name'
    fill_in t('activerecord.attributes.user.last_name'), with: 'Last name'
    fill_in t('activerecord.attributes.user.email'), with: 'email@example.com'
    fill_in 'user_phone', with: '6141972726'

    find(:css, '.dropdown').click
    find(:css, '.dropdown').find(:css, '.dropdown-menu.inner.show').find('span', text: 'God').click
    fill_in t('activerecord.attributes.user.password'), with: 'password'
    #fill_in t('activerecord.attributes.user.password_confirmation'), with: 'password'


    #click_button t('helpers.submit.submit', model: t('users.registrations.form.resource'))
    click_button 'Guardar usuario'
    #test debug rspec p11 rspec
    save_and_open_page


    #byebug
    #expect(page).to have_content(t('notifications_masc.success.resource.created',
    #                               resource: t('users.registrations.new_user.resource')))
  end

  scenario 'updates a user', js: true do
    another_user = create(:user, email: 'example@email.com', phone: '123123123')

    visit "/users/#{another_user.id}/edit"

    fill_in t('activerecord.attributes.user.email'), with: 'anotherexample@email.com'

    click_button t('helpers.submit.submit', model: t('users.registrations.form.resource'))

    #expect(page).to have_content(t('notifications_masc.success.resource.updated',
    #                               resource: t('users.registrations.form.resource')))
  end

  scenario 'updates user profile', js: true do
    visit '/users/edit'

    fill_in t('activerecord.attributes.user.email'), with: 'example@example.com'

    click_button t('helpers.submit.submit', model: t('users.registrations.edit.profile'))

    #  expect(page).to have_content(t('notifications_masc.success.resource.updated',
    #                               resource: t('users.registrations.form.resource')))
  end

  scenario 'changes password', js: true do
    visit '/users/change_password'

    fill_in t('activerecord.attributes.user.current_password'), with: user.password
    fill_in t('activerecord.attributes.user.password'), with: 'newpassword'
    fill_in t('activerecord.attributes.user.password_confirmation'), with: 'newpassword'

    click_button t('helpers.submit.submit', model: t('users.registrations.change_password.resource'))

    # expect(page).to have_content(t('notifications_fem.success.resource.updated',
    #                               resource: t('users.registrations.change_password.resource')))
  end

  scenario 'changes user password success', js: true do
    user = create(:user, email: 'example@email.com', phone: '123123123')
    visit "/users/#{user.id}/change_user_password"

    fill_in t('activerecord.attributes.user.password'), with: 'newpassword'
    fill_in t('activerecord.attributes.user.password_confirmation'), with: 'newpassword'

    click_button t('helpers.submit.submit', model: t('users.registrations.change_password.resource'))

    expect(page).to have_content(t('notifications_fem.success.resource.updated',
                                   resource: t('users.registrations.change_password.resource')))
  end

  scenario 'changes user password, password too short', js: true do
    user = create(:user, email: 'example@email.com', phone: '123123123')
    visit "/users/#{user.id}/change_user_password"

    fill_in t('activerecord.attributes.user.password'), with: 'new'
    fill_in t('activerecord.attributes.user.password_confirmation'), with: 'new'

    click_button t('helpers.submit.submit', model: t('users.registrations.change_password.resource'))

    expect(page).to have_content(t('errors.messages.too_short.other', count: Devise.password_length.min))
  end

  scenario 'changes user password, password_confirmation invalid', js: true do
    user = create(:user, email: 'example@email.com', phone: '123123123')
    visit "/users/#{user.id}/change_user_password"

    fill_in t('activerecord.attributes.user.password'), with: 'newnewnew'
    fill_in t('activerecord.attributes.user.password_confirmation'), with: 'newddd'

    click_button t('helpers.submit.submit', model: t('users.registrations.change_password.resource'))

    expect(page).to have_content(t('errors.messages.confirmation'))
  end

  scenario 'destroys a user', js: true do
    another_user = create(:user, email: 'vponce@email.com',phone:'123123123')

    visit '/users'

    expect  {
      find(:css, ".btn-destroy[data-resource-id='#{another_user.id}']").click
      within '.swal-modal' do
        find('.swal-button--confirm').click
      end
      wait_for_ajax
    }.to change(User, :count).by(-1)
  end
end
