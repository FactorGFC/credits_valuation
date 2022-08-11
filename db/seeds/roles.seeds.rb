p '==> creating roles'

# Disable auditing
Role.auditing_enabled = false

# Delete all roles
Role.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('roles')

Role.create!([
  {name: 'God', key: 'god', description: 'Rol super administrador.', scope: 'total'},
  {name: 'Administrador', key: 'admin', description: 'Rol de Administrador del sistema.', scope: 'total'},
  {name: 'Analista', key: 'analyst', description: 'Rol de Analista de crédito.', scope: 'owner'},
  {name: 'Empresa', key: 'enterprise', description: 'Rol de Empresa que solicitara un crédito.', scope: 'owner'},
  {name: 'Aprobador', key: 'approver', description: 'Rol de Aprobador.', scope: 'owner'},
  {name: 'Comité', key: 'committee', description: 'Rol de Comité.', scope: 'owner'},
])
