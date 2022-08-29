  # Disable auditing
  # Delete all permissions
  ProcessStatus.delete_all

  ActiveRecord::Base.connection.reset_pk_sequence!('process_statuses')

  p '==> creating process_statuses'
  ProcessStatus.create!([
                          #{name: 'Asignación', key: 'asignation', order: 1, active: true },
    {name: 'Analista Asignado', key: 'analist', order: 1, active: true },
    {name: 'Rechazado por Analista', key: 'denied_analist', order: 2, active: true },#Envia Correo Rechazo
    #Si se valida el credito con la información inicial del onboarding
    {name: 'Crédito Validado (ON BOARDING)', key: 'credit_validated', order: 3, active: true },

    #ciclo de trabajo
    #En espera de asignacion de periodos, si valida periodos entonces puede cambiar a estos 2 estatus
    {name: 'Rechazo validado', key: 'denied_validated_period', order: 4, active: true },
    {name: 'Captura validada', key: 'success_validated_period', order: 5, active: true },

    #gerencia de crédito
    {name: 'Cancelación Area de Crédito', key: 'rejected_by_credit_area', order: 6, active: true }, #Envia Correo Rechazo
    {name: 'Voto Favorable del Area de Crédito', key: 'success_by_credit_area', order: 7, active: true },

    #Comite
    {name: 'Comite Aprobado', key: 'committee_approved', order: 8, active: true },
    {name: 'Comite Rechazado', key: 'committee_rejected', order: 9, active: true },#Envia Correo Rechazo
    {name: 'Comite Pendiente', key: 'committee_pending', order: 10, active: true },

    {name: 'Liberación', key: 'release', order: 11, active: true },
  ])

