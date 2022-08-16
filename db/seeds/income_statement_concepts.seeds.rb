
p '==> creating Statement Of Income Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
IncomeStatementConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('income_statement_concepts')


IncomeStatementConcept.create!([
                           {name: 'Ingresos netos', key: 'Ingresos netos', number_key: 1, name_key: 'ingresos', active: true, capturable: false, parent_id: nil}, #1
                           {name: 'Ventas y/o servicios nacionales', key: 'Ventas y/o servicios nacionales', number_key: 1, name_key: 'ingresos', active: true, capturable: true, parent_id: 1}, #2
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 2}, #3
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 2}, #4
                           {name: 'Ventas y/o servicios extranjeros', key: 'Ventas y/o servicios extranjeros', number_key: 1, name_key: 'ingresos', active: true, capturable: true, parent_id: 1}, #5
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 5}, #6
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 5}, #7
                           {name: 'Devoluciones, descuentos y bonificaciones sobre ventas nacionales', key: 'Devoluciones, descuentos y bonificaciones sobre ventas nacionales', number_key: 1, name_key: 'ingresos', active: true, capturable: true, parent_id: 1}, #8
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 8}, #9
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 8}, #10
                           {name: 'Devoluciones, descuentos y bonificaciones sobre ventas al extranjero', key: 'Devoluciones, descuentos y bonificaciones sobre ventas al extranjero', number_key: 1, name_key: 'ingresos', active: true, capturable: true, parent_id: 1}, #11
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 11}, #12
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'ingresos', active: false, capturable: false, parent_id: 11}, #13
                           {name: 'Costo de ventas y/o servicios', key: 'Costo de ventas y/o servicios', number_key: 2, name_key: 'costo_de_ventas', active: true, capturable: false, parent_id: nil}, #14
                           {name: 'Mano de obra', key: 'Mano de obra', number_key: 2, name_key: 'costo_de_ventas', active: true, capturable: true, parent_id: 14}, #15
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 15}, #16
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 15}, #17
                           {name: 'Maquilas', key: 'Maquilas', number_key: 2, name_key: 'costo_de_ventas', active: true, capturable: true, parent_id: 14}, #18
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 18}, #19
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 18}, #20
                           {name: 'Gastos indirectos de fabricación', key: 'Gastos indirectos de fabricación', number_key: 2, name_key: 'costo_de_ventas', active: true, capturable: true, parent_id: 14}, #21
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 21}, #22
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 21}, #23
                           {name: 'Costo de las mercancías', key: 'Costo de las mercancías', number_key: 2, name_key: 'costo_de_ventas', active: true, capturable: true, parent_id: 14}, #24
                           {name: 'Compras netas nacionales', key: 'Compras netas nacionales', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 24}, #25
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 25}, #26
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 25}, #27
                           {name: 'Compras netas de importación', key: 'Compras netas de importación', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 24}, #28
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 28}, #29
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 28}, #30
                           {name: 'Inventario inicial', key: 'Inventario inicial', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 24}, #31
                           {name: 'Inventario final', key: 'Inventario final', number_key: nil, name_key: 'costo_de_ventas', active: false, capturable: false, parent_id: 24}, #32
                           {name: 'Utilidad bruta', key: 'Utilidad bruta', number_key: 3, name_key: 'utilidad_bruta', active: true, capturable: true, parent_id: nil}, #33
                           {name: 'Utilidad bruta', key: 'Utilidad bruta', number_key: nil, name_key: 'utilidad_bruta', active: false, capturable: false, parent_id: 33}, #34
                           {name: 'Pérdida bruta', key: 'Pérdida bruta', number_key: nil, name_key: 'utilidad_bruta', active: false, capturable: false, parent_id: 33}, #35
                           {name: 'Gastos de operación', key: 'Gastos de operación', number_key: 4, name_key: 'gastos_de_operacion', active: true, capturable: false, parent_id: nil}, #36
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: 4, name_key: 'gastos_de_operacion', active: true, capturable: true, parent_id: 36}, #37
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: 4, name_key: 'gastos_de_operacion', active: true, capturable: true, parent_id: 36}, #38
                           {name: 'Utilidad de operación', key: 'Utilidad de operación', number_key: 5, name_key: 'utilidad_de_operacion', active: true, capturable: true, parent_id: nil}, #39
                           {name: 'Utilidad de operación', key: 'Utilidad de operación', number_key: nil, name_key: 'utilidad_de_operacion', active: false, capturable: false, parent_id: 39}, #40
                           {name: 'Pérdida de operación', key: 'Pérdida de operación', number_key: nil, name_key: 'utilidad_de_operacion', active: false, capturable: false, parent_id: 39}, #41
                           {name: 'Resultado integral de financiamiento', key: 'Resultado integral de financiamiento', number_key: 6, name_key: 'resultado_integral_de_financiamiento', active: true, capturable: false, parent_id: nil}, #42
                           {name: 'Intereses devengados nacionales', key: 'Intereses devengados nacionales', number_key: 7, name_key: 'gasto_financiero', active: true, capturable: true, parent_id: 42}, #43
                           {name: 'Intereses devengados a favor nacionales', key: 'Intereses devengados a favor nacionales', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 43}, #44
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 44}, #45
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 44}, #46
                           {name: 'Intereses devengados a cargo nacionales', key: 'Intereses devengados a cargo nacionales', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 43}, #47
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 47}, #48
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 47}, #49
                           {name: 'Intereses moratorios nacionales', key: 'Intereses moratorios nacionales', number_key: 7, name_key: 'gasto_financiero', active: true, capturable: true, parent_id: 42}, #50
                           {name: 'Intereses moratorios a favor nacionales', key: 'Intereses moratorios a favor nacionales', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 50}, #51
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 51}, #52
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 51}, #53
                           {name: 'Intereses moratorios a cargo nacionales', key: 'Intereses moratorios a cargo nacionales', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 50}, #54
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 54}, #55
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 54}, #56
                           {name: 'Intereses devengados del extranjero', key: 'Intereses devengados del extranjero', number_key: 7, name_key: 'gasto_financiero', active: true, capturable: true, parent_id: 42}, #57
                           {name: 'Intereses devengados a favor del extranjero', key: 'Intereses devengados a favor del extranjero', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 57}, #58
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 58}, #59
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 58}, #60
                           {name: 'Intereses devengados a cargo del extranjero', key: 'Intereses devengados a cargo del extranjero', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 57}, #61
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 61}, #62
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 61}, #63
                           {name: 'Intereses moratorios del extranjero', key: 'Intereses moratorios del extranjero', number_key: 7, name_key: 'gasto_financiero', active: true, capturable: true, parent_id: 42}, #64
                           {name: 'Intereses moratorios a favor del extranjero', key: 'Intereses moratorios a favor del extranjero', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 64}, #65
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 65}, #66
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 65}, #67
                           {name: 'Intereses moratorios a cargo del extranjero', key: 'Intereses moratorios a cargo del extranjero', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 64}, #68
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 68}, #69
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'gasto_financiero', active: false, capturable: false, parent_id: 68}, #70
                           {name: 'Ganancia cambiaria', key: 'Ganancia cambiaria', number_key: 8, name_key: 'utilidad_o_perdida_cambiaria', active: true, capturable: true, parent_id: 42}, #71
                           {name: 'Ganancia cambiaria', key: 'Ganancia cambiaria', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 71}, #72
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 72}, #73
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 72}, #74
                           {name: 'Pérdida cambiaria', key: 'Pérdida cambiaria', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 71}, #75
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 75}, #76
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 75}, #77
                           {name: 'Resultado por posición monetaria', key: 'Resultado por posición monetaria', number_key: 8, name_key: 'utilidad_o_perdida_cambiaria', active: true, capturable: true, parent_id: 42}, #78
                           {name: 'Resultado por posición monetaria favorable', key: 'Resultado por posición monetaria favorable', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 78}, #79
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 79}, #80
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 79}, #81
                           {name: 'Resultado por posición monetaria desfavorable', key: 'Resultado por posición monetaria desfavorable', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 78}, #82
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 82}, #83
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 82}, #84
                           {name: 'Otras operaciones financieras', key: 'Otras operaciones financieras', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 42}, #85
                           {name: 'Otras operaciones financieras nacionales', key: 'Otras operaciones financieras nacionales', number_key: nil, name_key: 'otros_gastos_e_ingresos', active: false, capturable: false, parent_id: 85}, #86
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 86}, #87
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 86}, #88
                           {name: 'Otras operaciones financieras extranjeras', key: 'Otras operaciones financieras extranjeras', number_key: nil, name_key: 'otros_gastos_e_ingresos', active: false, capturable: false, parent_id: 85}, #89
                           {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 89}, #90
                           {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'utilidad_o_perdida_cambiaria', active: false, capturable: false, parent_id: 89}, #91
                           {name: 'Otros gastos', key: 'Otros gastos', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: false, parent_id: nil}, #92
                           {name: 'Otros gastos nacionales', key: 'Otros gastos nacionales', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 92}, #93
                           {name: 'Otros gastos extranjeros', key: 'Otros gastos extranjeros', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 92}, #94
                           {name: 'Otros productos', key: 'Otros productos', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: false, parent_id: nil}, #95
                           {name: 'Otros productos nacionales', key: 'Otros productos nacionales', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 95}, #96
                           {name: 'Otros productos extranjeros', key: 'Otros productos extranjeros', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 95}, #97
                           {name: 'Partidas discontinuas y extraordinarias', key: 'Partidas discontinuas y extraordinarias', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: false, parent_id: nil}, #98
                           {name: 'Ingresos por partidas discontinuas y extraordinarias', key: 'Ingresos por partidas discontinuas y extraordinarias', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 98}, #99
                           {name: 'Gastos por partidas discontinuas y extraordinarias', key: 'Gastos por partidas discontinuas y extraordinarias', number_key: 9, name_key: 'otros_gastos_e_ingresos', active: true, capturable: true, parent_id: 98}, #100
                           {name: 'Utilidad antes de impuestos', key: 'Utilidad antes de impuestos', number_key: 10, name_key: 'utilidad_antes_de_impuestos', active: true, capturable: true, parent_id: nil}, #101
                           {name: 'Utilidad antes de impuestos', key: 'Utilidad antes de impuestos', number_key: nil, name_key: 'utilidad_antes_de_impuestos', active: false, capturable: false, parent_id: 101}, #102
                           {name: 'Pérdida antes de impuestos', key: 'Pérdida antes de impuestos', number_key: nil, name_key: 'utilidad_antes_de_impuestos', active: false, capturable: false, parent_id: 101}, #103
                           {name: 'ISR', key: 'ISR', number_key: 11, name_key: 'ISR', active: true, capturable: true, parent_id: nil}, #104
                           {name: 'PTU', key: 'PTU', number_key: 12, name_key: 'PTU', active: true, capturable: true, parent_id: nil}, #105
                           {name: 'Participación subsidiaria', key: 'Participación subsidiaria', number_key: 13, name_key: 'participacion_subsidiarios', active: true, capturable: true, parent_id: nil}, #106
                           {name: 'Utilidad en participación subsidiaria', key: 'Utilidad en participación subsidiaria', number_key: 13, name_key: 'participacion_subsidiarios', active: false, capturable: false, parent_id: 106}, #107
                           {name: 'Pérdida en participación subsidiaria', key: 'Pérdida en participación subsidiaria', number_key: 13, name_key: 'participacion_subsidiarios', active: false, capturable: false, parent_id: 106}, #108
                           {name: 'Efectos de reexpresión excepto resultado por posición monetaria', key: 'Efectos de reexpresión excepto resultado por posición monetaria', number_key: 13, name_key: 'participacion_subsidiarios', active: true, capturable: false, parent_id: nil}, #109
                           {name: 'Efectos de reexpresión favorables excepto resultado por posición monetaria', key: 'Efectos de reexpresión favorables excepto resultado por posición monetaria', number_key: 13, name_key: 'participacion_subsidiarios', active: true, capturable: true, parent_id: 109}, #110
                           {name: 'Efectos de reexpresión desfavorables excepto resultado por posición monetaria', key: 'Efectos de reexpresión desfavorables excepto resultado por posición monetaria', number_key: 13, name_key: 'participacion_subsidiarios', active: true, capturable: true, parent_id: 109}, #110
                           {name: 'Utilidad neta', key: 'Utilidad neta', number_key: 14, name_key: 'utilidad_neta', active: true, capturable: true, parent_id: nil}, #111
                           {name: 'Utilidad neta', key: 'Utilidad neta', number_key: 14, name_key: 'utilidad_neta', active: true, capturable: true, parent_id: 111}, #112
                           {name: 'Pérdida neta', key: 'Pérdida neta', number_key: 14, name_key: 'utilidad_neta', active: true, capturable: true, parent_id: 111}, #113

                           #SEEDS PARA CAMPOS EXTRA REQUERIDOS PARA CALCULAR RAZÓNES FINANCIERAS Correrlo
                           {name: 'Depreciación y amortización', key: 'dep_and_amort', number_key: nil, name_key: 'dep_and_amort', active: true, capturable: true, parent_id: nil}, #114
])