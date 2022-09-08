after :roles do
  p '==> creating users'

  # Disable auditing
  User.auditing_enabled = false

  # Delete all roles
  User.delete_all

  # Create users
  User.create(email: 'god@fg.mx', password: 'password', first_name: 'God', last_name: 'System User', phone: '1111111111', confirmed_at: Time.now, role_id: Role.find_by_key('god').id)
  #User.create(email: 'admin@fg.mx', password: 'password', first_name: 'Admin', last_name: 'System User', phone: '1111111111', confirmed_at: Time.now, role_id: Role.find_by_key('admin').id)



end
