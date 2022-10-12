p '==> creating Flow Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
FlowConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('flow_concepts')


FlowConcept.create!([
                      { name: 'FLUJO NETO', key: 'flujo_neto', active: true },

                      #NUEVAS SEEDS
                      { name: 'FLUJO BRUTO', key: 'flujo_bruto', active: true },
                      { name: 'VARIACIÓN CLIENTES', key: 'variacion_clientes', active: true },
                      { name: 'VARIACIÓN INVENTARIOS', key: 'variacion_inventarios', active: true },
                      { name: 'VARIACIÓN PROVEEDORES', key: 'variacion_proveedores', active: true },
                      { name: 'VARIACIÓN ANCITIPO CLIENTES', key: 'variacion_anticipo_clientes', active: true },
                      { name: 'FLUJO DE OPERACIÓN', key: 'flujo_operacion', active: true },
                      { name: 'IMPUESTOS PAGADOS Y PTU', key: 'impuestos_pagados_ptu', active: true },
                      { name: 'GASTOS FINANCIEROS', key: 'gastos_financieros', active: true },
                      { name: 'VARIACIÓN EN ACTIVO FIJO', key: 'variacion_activo_fijo', active: true },
                      { name: 'VARIACIÓN OTROS ACTIVOS', key: 'variacion_otros_activos', active: true },
                      { name: 'VARIACIÓN OTROS PASIVOS', key: 'variacion_otros_pasivos', active: true },
                      { name: 'AUMENTO / DISMINUCIÓN EN CAJA', key: 'aumento_disminucion_caja', active: true }
                  ])
