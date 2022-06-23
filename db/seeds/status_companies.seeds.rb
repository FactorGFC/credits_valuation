p '==> creating status companies'

# Disable auditing
# StatusCompany.auditing_enabled = false

# Delete all roles
StatusCompany.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('status_companies')

StatusCompany.create!([
  {name: 'Pendiente', key: 'pendiente', description: 'Estatus de la compañia pendiente.'},
  {name: 'Aprobada', key: 'aprobada', description: 'Estatus de la compañia aprobada.'},
  {name: 'Rechazada', key: 'rechazada', description: 'Estatus de la compañia Rechazada.'}
])
