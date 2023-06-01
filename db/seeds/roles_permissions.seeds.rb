after :permissions do
  # Disable auditing
  PermissionsRole.auditing_enabled = false

  PermissionsRole.delete_all

  ActiveRecord::Base.connection.reset_pk_sequence!('permissions_roles')

  p '==> creating permissions_roles'

  PermissionsRole.create!([
                            #{role_id: Role.find_by_key('admin').id, permission_id: Permission.find_by_name('Editar Perfil De Usuario').id},
                            #{role_id: Role.find_by_key('admin').id, permission_id: Permission.find_by_name('Actualizar Perfil De Usuario').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Editar Perfil De Usuario').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Actualizar Perfil De Usuario').id},
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
                            #{role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Finalizar captura').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Mostar vista de buro de crédito').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Mostar vista de reporte buro de crédito').id},

                            #Analista
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver vista de detalles de la compañia').id},
                            #{role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver lista de comentarios de solicitud').id},
                            #{role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Añadir comentarios a solicitud').id},
                            #{role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Crear comentarios de solicitud').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Generar razónes financieras').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Guardar datos extra para razónes financieras').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Asignar detalles a solicitud').id},
                            #17-Ago-2022
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Crear petición de balance financiero').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Crear captura estado de resultados').id},
                            #{role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Finalizar captura').id},
                            #25-Ago-2022
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Generar flujo de efectivo').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver vista de comentarios').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Crear comentarios para tabs').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Subir documento a request en detalles de solicitud').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Asignar periodos a compañia').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver vista de captura de estado financiero').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Crear Estado de resultados').id},
                            #29-Ago-2022
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Habilitar captura').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Mostar vista de comentario de una solicitud de una solicitud').id},

                            #Nuevos 8-2022
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Crear eventos').id},
                            {role_id: Role.find_by_key('credit_area').id,       permission_id: Permission.find_by_name('Crear eventos').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Crear eventos').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Ver eventos').id},
                            {role_id: Role.find_by_key('credit_area').id,       permission_id: Permission.find_by_name('Ver eventos').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Ver eventos').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Asignar detalles a solicitud').id},
                            {role_id: Role.find_by_key('credit_area').id,       permission_id: Permission.find_by_name('Asignar detalles a solicitud').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Asignar detalles a solicitud').id},

                            #Nuevos 12-09-2022
                            {role_id: Role.find_by_key('credit_area').id,    permission_id: Permission.find_by_name('Ver vista para crear una nueva compañia').id},
                            {role_id: Role.find_by_key('credit_area').id,    permission_id: Permission.find_by_name('Crear compañia').id},
                            {role_id: Role.find_by_key('credit_area').id,    permission_id: Permission.find_by_name('Ver compañias').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Ver vista para crear una nueva compañia').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Crear compañia').id},
                            {role_id: Role.find_by_key('promotion_area').id,    permission_id: Permission.find_by_name('Ver compañias').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Ver vista de detalles de la compañia').id},
                            {role_id: Role.find_by_key('promotion_area').id, permission_id: Permission.find_by_name('Ver vista de detalles de la compañia').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Validar o rechazar compañia').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Validar o rechazar compañia').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Ver vista de detalles de la compañia').id},
                            {role_id: Role.find_by_key('committee').id,    permission_id: Permission.find_by_name('Ver eventos').id},
                            {role_id: Role.find_by_key('committee').id,    permission_id: Permission.find_by_name('Ver acuerdos en eventos').id},

                            #20-OCT-2022
                            #Company
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Confirmar y completar datos en solicitud').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Mensaje confirmación para buró').id},
                            #26-10-2022
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Mostar vista de comentario de una solicitud de una solicitud').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Añadir comentarios de solicitud').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Ver dictamen').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Ver dictamen').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Ver dictamen').id},

                            #Permisos 23-NOV-2022
                            {role_id: Role.find_by_key('committee').id, permission_id: Permission.find_by_name('Ver dictamen').id},
                            {role_id: Role.find_by_key('committee').id, permission_id: Permission.find_by_name('Actualizar acuerdos de  eventos').id},


                            #Permisos 16 de Diciembre
                            {role_id: Role.find_by_key('committee').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},
                            {role_id: Role.find_by_key('promotion_area').id, permission_id: Permission.find_by_name('Editar Un Usuario').id},

                            #Permisos 20 Diciembre
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Mostar vista de comentario de una solicitud de una solicitud').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Ver pdf de buro de credito').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Mostar vista de comentario de una solicitud de una solicitud').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Ver pdf de buro de credito').id},
                            {role_id: Role.find_by_key('credit_area').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
                            {role_id: Role.find_by_key('analyst').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
                            {role_id: Role.find_by_key('approver').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
                            {role_id: Role.find_by_key('committee').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
                            {role_id: Role.find_by_key('credit_management').id, permission_id: Permission.find_by_name('Actualizar Usuario').id},
                            {role_id: Role.find_by_key('enterprise').id, permission_id: Permission.find_by_name('crear usuario de sat').id}

                          ])
end
