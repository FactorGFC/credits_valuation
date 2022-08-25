after :initialize_permissions do
  # Disable auditing
  # Delete all permissions
  Permission.delete_all

  ActiveRecord::Base.connection.reset_pk_sequence!('permissions')
  Permission.auditing_enabled = false

  p '==> creating permissions'
  Permission.create!([
    {name: 'Mostrar bitácora detallada', description: 'Permite visualizar registros de bitácora detallada.', action: 'logbook_detail_table', controller: 'Audits' },
    {name: 'Mostrar bitácora en timeline', description: 'Permite visualizar registros de bitácora en timeline.', action: 'logbook_timeline', controller: 'Audits' },
    {name: 'Actualizar Permiso', description: 'Permite actualizar un permiso. ', action: 'update', controller: 'Permissions' },
    {name: 'Crear Permiso', description: 'Permite crear permisos.', action: 'create', controller: 'Permissions' },
    {name: 'Destruir Permiso', description: 'Permite destruir un permiso.', action: 'destroy', controller: 'Permissions' },
    {name: 'Editar Permiso', description: 'Permite visualizar la vista editar permiso.', action: 'edit', controller: 'Permissions' },
    {name: 'Generar Semillas', description: 'Permite generar las semillas de los permisos y sus relaciones.', action: 'generate_seeds', controller: 'Permissions' },
    {name: 'Mostrar Detalles De Un Permiso', description: 'Permite mostrar los detalles de un permiso.', action: 'show', controller: 'Permissions' },
    {name: 'Mostrar Listado De Permisos', description: 'Permite mostrar un listado de los permisos.', action: 'index', controller: 'Permissions' },
    {name: 'Nuevo Permiso', description: 'Permite visualizar la vista nuevo permiso.', action: 'new', controller: 'Permissions' },
    {name: 'Obtener Controladores Y Acciones', description: 'Permite obtener los controladores y acciones para generar los permisos.', action: 'get_controller_actions', controller: 'Permissions' },
    {name: 'Actualizar Rol', description: 'Permite actualizar un rol.', action: 'update', controller: 'Roles' },
    {name: 'Asignar O Desasignar Permisos A Un Rol', description: 'Permite asignar o desasingnar un permiso a un rol.', action: 'permission', controller: 'Roles' },
    {name: 'Crear Rol', description: 'Permite crear roles.', action: 'create', controller: 'Roles' },
    {name: 'Destruir Rol', description: 'Permite destruir un rol.', action: 'destroy', controller: 'Roles' },
    {name: 'Editar Rol', description: 'Permite visualizar la vista editar rol.', action: 'edit', controller: 'Roles' },
    {name: 'Mostrar Listado De Roles', description: 'Permite mostrar un listado de los roles.', action: 'index', controller: 'Roles' },
    {name: 'Mostrar Permisos Asignados A Un Rol', description: 'Permite visualizar la vista para asignar permisos a un rol.', action: 'permissions', controller: 'Roles' },
    {name: 'Nuevo Rol', description: 'Permite visualizar la vista nuevo rol.', action: 'new', controller: 'Roles' },
    {name: 'Actualizar Perfil De Usuario', description: 'Permite actualizar propio perfil.', action: 'update', controller: 'Users::Registrations' },
    {name: 'Actualizar Usuario', description: 'Permite actualizar un usuario.', action: 'update_user', controller: 'Users::Registrations' },
    {name: 'Cambiar Contraseña De Un Usuario', description: 'Permite visualizar la vista cambiar contraseña de un usuario.', action: 'change_user_password', controller: 'Users::Registrations' },
    {name: 'Cambiar Contraseña Propia', description: 'Permite visualizar la vista cambiar contraseña propia.', action: 'change_password', controller: 'Users::Registrations' },
    {name: 'Crear Usuario', description: 'Permite crear un usuario.', action: 'create_user', controller: 'Users::Registrations' },
    {name: 'Editar Perfil De Usuario', description: 'Permite visualizar editar propio perfil.', action: 'edit', controller: 'Users::Registrations' },
    {name: 'Editar Un Usuario', description: 'Permite visualizar la vista editar de un usuario.', action: 'edit_user', controller: 'Users::Registrations' },
    {name: 'Eliminar Usuario', description: 'Permite destruir un usuario.', action: 'destroy', controller: 'Users::Registrations' },
    {name: 'Guardar Contraseña De Un Usuario', description: 'Permite guardar la contraseña de un usuario.', action: 'save_user_password', controller: 'Users::Registrations' },
    {name: 'Guardar Contraseña Propia', description: 'Permite guardar la contraseña propia.', action: 'save_password', controller: 'Users::Registrations' },
    {name: 'Mostrar Listado De Usuarios', description: 'Permite mostrar un listado de los usuarios.', action: 'index', controller: 'Users::Registrations' },
    {name: 'Mostrar Perfil de Usuario', description: 'Permite mostrar el perfil de un usuario.', action: 'show', controller: 'Users::Registrations' },
    {name: 'Nuevo Usuario', description: 'Permite visualizar la vista nuevo usuario.', action: 'new_user', controller: 'Users::Registrations' },
    {name: 'Ver compañias', description: 'Permite ver las compañias.', action: 'index', controller: 'Companies' },
    {name: 'Llenar datos de compañia', description: 'Vista para llenar los datos de una compañia.', action: 'data_company', controller: 'Companies' },
    {name: 'Vista para completar compañia', description: 'Permite entrar a la vista para completar el perfil de una compañia.', action: 'request_steps', controller: 'Companies' },
    {name: 'Permite actualizar compañia', description: 'Permita actualizar las compañias.', action: 'update', controller: 'Companies' },
    {name: 'Creacion del reporte de autorizacion', description: 'Permite poder crear el reporte de autorización.', action: 'letter_authorization', controller: 'Companies' },
    {name: 'Ver vista de captura de estado financiero', description: 'Permite mostrar la vista para la captura del estado financiero.', action: 'balance_sheet_request', controller: 'Companies' },
    {name: "Crear Estado de resultados", description: "Permite crear estado de resultados", action: "income_statement_capture", controller: "Companies"},
    {name: "Crear captura estado de resultados", description: "Permite crear captura de estado de resultados", action: "create_income_statement_cap", controller: "Companies"},
    {name: "Crear petición de balance financiero", description: "Crear petición de balance financiero", action: "create_balance_sheet_request", controller: "Companies"},
    #{name: "Vista de  petición de balance financiero", description: "Vista de  petición de balance financiero", action: "balance_sheet_request", controller: "Companies"},
    {name: "Ver vista comparativa de balance financiero", description: "Ver vista comparativa de balance financiero", action: "balance_sheet_comparative", controller: "Companies"},
    {name: 'Mostar lista de blogs', description: 'Ver lista de blogs', action: 'index', controller: 'Blog' },
    {name: 'Ver vista de detalles de la compañia', description: 'Permite entrar a la vista de los detalles de compañia', action: 'company_details', controller: 'Companies'},
    {name: 'Asignar detalles a solicitud', description: 'Permite asignar detalles a solicitud', action: 'assign_details_to_request', controller: 'Companies'},
    {name: 'Mostar vista de buro de crédito', description: 'Permite ver la vista del resumen de buro de crédito', action: 'index', controller: 'CreditBureaus' },
    {name: 'Mostar vista de reporte buro de crédito', description: 'Permite ver la vista del reporte del buro de crédito', action: 'show', controller: 'CreditBureaus' },
    {name: 'Mostar vista de comentario de una solicitud de una solicitud', description: 'Permite ver la lista de comentarios de una solicitud', action: 'index', controller: 'RequestComments' },

    {name: 'Añadir comentarios de solicitud', description: 'Permite añadir comentarios en solicitud', action: 'add_comment_to_request', controller: 'RequestComments' },
    {name: 'Ver eventos', description: 'Permite ver eventos', action: 'index', controller: 'Events' },
    {name: 'Ver acuerdos en eventos', description: 'Permite entrar a vista sobre acuerdos para eventos.', action: 'agreements', controller: 'Events' },
    {name: 'Crear eventos', description: 'Permite crear eventos.', action: 'save_event', controller: 'Events' },
    {name: 'Eliminar eventos', description: 'Permite eliminar eventos.', action: 'delete', controller: 'Events' },
    {name: 'Terminar eventos', description: 'Permite terminar eventos.', action: 'finish_event', controller: 'Events' },
    {name: 'Obtener información de eventos', description: 'Permite obtener informacion de eventos.', action: 'get_event_info', controller: 'Events' },
    {name: 'Consultar eventos', description: 'Permite consultar eventos.', action: 'get_events', controller: 'Events' },
    {name: 'Crear acuerdo de eventos', description: 'Permite crear acuerdo de eventos.', action: 'save_event_agreement', controller: 'Events' },
    {name: 'Actualizar eventos', description: 'Permite actualizar eventos.', action: 'update', controller: 'Events' },
    {name: 'Actualizar acuerdos de  eventos', description: 'Permite actualizar acuerdos de eventos.', action: 'update_event_agreement', controller: 'Events' },
    {name: 'Generar razónes financieras', description: 'Permite generar razónes financieras.', action: 'generate_financial_reasons', controller: 'Companies' },
    {name: 'Guardar datos extra para razónes financieras', description: 'Permite guardar datos extra para completar razónes financieras', action: 'save_extra_data', controller: 'Companies' },

    #25-Ago-2022
    {name: 'Generar flujo de efectivo', description: 'Permite generar flujo de efectivo', action: 'generate_cash_flow', controller: 'Companies'}
  ])
  #
end

Permission.create()
