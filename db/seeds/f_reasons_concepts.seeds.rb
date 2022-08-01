p '==> creating Financial Reasons Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
FReasonsConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('f_reasons_concepts')


FReasonsConcept.create!([
     { name: 'CRECIMIENTO NOM. VENTAS', key: 'crecimiento_nom_ventas', formula: '((VTS AÑO 1 / VTA AÑO 0 ) -1', description: 'Dinámica de crecimiento de las ventas de un año contra otro' },
     { name: 'CRECIMIENTO REAL VENTAS', key: 'crecimiento_real_ventas', formula: '((VTS  AÑO 1 / (VTA  AÑO 0 x (1+INF)))-1', description: 'Dinámica de crecimiento de las ventas descontando la inflación' },
     { name: 'ROTACIÓN DE ACTIVOS', key: 'rotacion_de_activos', formula: 'VENTAS / ACTIVOS PROMEDIO', description: 'Mide el nivel de ventas generado por los activos de la empresa, proporciona un parametro de qué tan eficientemente la empresa maneja sus activos para generar ventas' },
     { name: 'MARGEN OPERATIVO', key: 'margen_operativo', formula: 'UAFIR / VENTAS', description: 'Porcentaje de utilidad o pérdida por producir, comercializar y vender su producto por cada peso de venta' },
     { name: 'RENTABILIDAD BASE CAPITAL (ROE)', key: 'rentabilidad_base_capital', formula: 'UTILIDAD NETA / CAPITAL CONTABLE PROM.', description: '' },
     { name: 'MARGEN NETO', key: 'margen_neto', formula: 'UTILIDAD NETA / VENTAS', description: 'Porcentaje de la utilidad o pérdida neta por producir, comercializar, vender, financiarse y pagar impuestos ' },
     { name: 'RAZÓN CIRCULANTE', key: 'razón_circulante', formula: 'ACTIVO CIRCULANTE / PASIVO CIRCULANTE', description: 'Refleja la capacidad de la empresa de cubrir sus compromisos de corto plazo, haciendo uso de sus activos líquidos (facilmente convertibles en efectivo)' },
     { name: 'PRUEBA DEL ACIDO', key: 'prueba_del_acido', formula: '(ACTIVO CIRC. - INVENTARIOS) / PASIVO CIRC.', description: 'Refleja la capacidad de la empresa de cubrir sus compromisos de corto plazo, haciendo uso de sus activos líquidos, sin incluir a los inventarios' },
     { name: 'PASIVO TOTAL / CAPITAL CONTABLE', key: 'pas_total_cap_contable', formula: 'PASIVO TOTAL / CAPITAL CONTABLE', description: 'Indica cuantas veces el pasivo total representa del capital aportado por los socios' },
     { name: 'DIAS CLIENTES', key: 'dias_clientes', formula: '((CLIENTES + (CxC FIL. OP.)) / VTAS) X DÍAS PERIODO', description: 'Número de días para recuperar las ventas a crédito' },
     { name: 'DIAS INVENTARIO', key: 'dias_inventario', formula: '(INVENTARIO X (DIAS PERIOD.)) / CTO DE VTS', description: 'Número de días que permanece el inventario en la empresa antes de su venta' },
     { name: 'DIAS PROVEEDORES', key: 'dias_proveedores', formula: '((PROV. + CxP FIL. OP.)) / CTO VTS) X DÍAS PERIODO', description: 'Número de días de financiamiento que otorgan los proveedores' },
     { name: 'CICLO FINANCIERO', key: 'ciclo_financiero', formula: 'D. CARTERA + D. INVENTARIO - D. PROVEEDORES', description: 'Necesidad (en días) de apoyo para financiar el ciclo operativo del negocio' },
     { name: 'INVERSION EN TRABAJO', key: 'inversion_en_trabajo', formula: 'CARTERA + CxC FIL + INV - PROV - CxP FIL', description: 'Necesidad (en monto) de apoyo para financiar el ciclo operativo del negocio.' },
     { name: 'COBERTURA DE INTERESES (DEP)', key: 'cobertura_de_intereses', formula: '(UAFIR. + DEP.) / GASTOS FINANCIEROS', description: 'Indica cuantas veces cubren los recursos generados en efectivo por la operación al servicio de la deuda' },
     { name: 'COBERTURA DE DEUDA', key: 'cobertura_de_deuda', formula: 'UAFIR / (PAGO DE CAPITAL +  GTO. FINANC.)', description: '' },
     { name: 'DEUDA FINANCIERA LP / UAFIRDAA', key: 'deuda_financiera_lp', formula: '', description: '' },
     { name: 'DEUDA FINANCIERA TOTAL / UAFIRDA', key: 'deuda_financiera_total', formula: '', description: '' },
])