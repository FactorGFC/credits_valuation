require 'rails_helper'

RSpec.feature 'Sessions', type: :feature do
  before(:example) do
    @user = create(:user,phone: '123123123')
  end


end
