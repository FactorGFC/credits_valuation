after :permissions do
  # Disable auditing
  PermissionsRole.auditing_enabled = false

  PermissionsRole.delete_all

  ActiveRecord::Base.connection.reset_pk_sequence!('permissions_roles')

  p '==> creating permissions_roles'
  Rails.logger.info ""
  PermissionsRole.create!([
                            #{role_id: Role.find_by_key('admin').id, permission_id: Permission.find_by_name('Editar Perfil De Usuario').id},
                            #{role_id: Role.find_by_key('admin').id, permission_id: Permission.find_by_name('Actualizar Perfil De Usuario').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Ver compañias').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Llenar datos de compañia').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Vista para completar compañia').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Permite actualizar compañia').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Creacion del reporte de autorizacion').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Ver vista de captura de estado financiero').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Crear captura estado de resultados').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Ver vista comparativa de balance financiero').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Crear petición de balance financiero').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Crear Estado de resultados').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Finalizar captura').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Mostar vista de buro de crédito').id},
    {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Mostar vista de reporte buro de crédito').id},
    {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver vista de detalles de la compañia').id}

  ])
end
