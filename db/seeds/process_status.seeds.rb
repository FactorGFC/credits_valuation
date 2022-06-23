  # Disable auditing
  # Delete all permissions
  ProcessStatus.delete_all

  ActiveRecord::Base.connection.reset_pk_sequence!('process_statuses')

  p '==> creating process_statuses'
  ProcessStatus.create!([
    {name: 'Asignación', key: 'asignation', order: 1, active: true },
    {name: 'Analista', key: 'analist', order: 1, active: true },
    {name: 'Area de Crédito', key: 'credit_area', order: 2, active: true },
    {name: 'Gerencia', key: 'management', order: 3, active: true },
    {name: 'Liberación', key: 'release', order: 4, active: true },
  ])

