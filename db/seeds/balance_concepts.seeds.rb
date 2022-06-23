
p '==> creating Balance Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
BalanceConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('balance_concepts')

BalanceConcept.create!([
    {name: 'Activo total', key: 'Activo total', number_key: nil, name_key: 'activo_total', active: true, capturable: false, parent_id: nil}, #1
    {name: 'Activo circulante', key: 'Activo circulante', number_key: 1, name_key: 'activo_circulante', active: true, capturable: false, parent_id: 1}, #2
    {name: 'Caja', key: 'Caja', number_key: 1, name_key: 'caja', active: true, capturable: true, parent_id: 2}, #3
    {name: 'Efectivo en caja y depósitos en instituciones de crédito nacionales', key: 'Efectivo en caja y depósitos en instituciones de crédito nacionales', number_key: 1, name_key: 'efectivo_en_caja_y_depositos_en_instituciones_de_credito_nacionales', active: false, capturable: false, parent_id: 3}, #4
    {name: 'Efectivo en caja y depósitos en instituciones de crédito del extranjero', key: 'Efectivo en caja y depósitos en instituciones de crédito del extranjero', number_key: 1, name_key: 'efectivo_en_caja_y_depositos_en_instituciones_de_credito_del_extranjero', active: false, capturable: false, parent_id: 3}, #5
    {name: 'Clientes', key: 'Clientes', number_key: 2, name_key: 'clientes', active: true, capturable: true, parent_id: 2}, #6
    {name: 'Cuentas y documentos por cobrar nacionales', key: 'Cuentas y documentos por cobrar nacionales', number_key: nil, name_key: 'cuentas_y_documentos_por_cobrar_nacionales', active: false, capturable: false, parent_id: 6}, #7
    {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'partes_relacionadas', active: false, capturable: false, parent_id: 7}, #8
    {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'partes_no_relacionadas', active: false, capturable: false, parent_id: 7}, #9
    {name: 'Cuentas y documentos por cobrar del extranjero', key: 'Cuentas y documentos por cobrar del extranjero', number_key: nil, name_key: 'cuentas_y_documentos_por_cobrar_del_extranjero', capturable: false, active: false, parent_id: 6}, #10
    {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'partes_relacionadas', active: false, capturable: false, parent_id: 10}, #11
    {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'partes_no_relacionadas', active: false, capturable: false, parent_id: 10}, #12
    {name: 'Inversiones temporales', key: 'Inversiones temporales', number_key: 1, name_key: 'inversiones_temporales', active: true, capturable: true, parent_id: 2}, #13
    {name: 'Inversiones en valores con instituciones nacionales (excepto acciones)', key: 'Inversiones en valores con instituciones nacionales (excepto acciones)', number_key: nil, name_key: 'inversiones_en_valores_con_instituciones_nacionales_(excepto_acciones)', active: false, capturable: false, parent_id: 13}, #14
    {name: 'Inversiones en valores con instituciones extranjeras (excepto acciones)', key: 'Inversiones en valores con instituciones extranjeras (excepto acciones)', number_key: nil, name_key: 'inversiones_en_valores_con_instituciones_extranjeras_(excepto_acciones)', active: false, capturable: false, parent_id: 13}, #15
    {name: 'Inventarios', key: 'Inventarios', number_key: 3, name_key: 'inventarios', active: true, capturable: true, parent_id: 2}, #16
    {name: 'Impuestos por cobrar', key: 'Impuestos por cobrar', number_key: nil, name_key: 'impuestos_por_cobrar', active: false, capturable: false, parent_id: 2}, #17
    {name: 'Contribuciones a favor', key: 'Contribuciones a favor', number_key: 4, name_key: 'contribuciones_a_favor', active: true, capturable: true, parent_id: 2}, #18
    {name: 'Otros activos circulantes', key: 'Otros activos circulantes', number_key: 4, name_key: 'otros_activos_circulantes', active: true, capturable: true, parent_id: 2}, #19
    {name: 'Activo fijo', key: 'Activo fijo', number_key: nil, name_key: 'activo_fijo', active: true, capturable: false, parent_id: 1}, #20
    {name: 'Equipo de cómputo', key: 'Equipo de cómputo', number_key: 6, name_key: 'equipo_de_computo', active: true, capturable: true, parent_id: 20}, #21
    {name: 'Mobiliario y equipo de oficina', key: 'Mobiliario y equipo de oficina', number_key: 6, name_key: 'mobiliario_y_equipo_de_oficina', active: true, capturable: true, parent_id: 20}, #22
    {name: 'Terrenos', key: 'Terrenos', number_key: 5, name_key: 'terrenos', active: true, capturable: true, parent_id: 20}, #23
    {name: 'Inversiones en acciones', key: 'Inversiones en acciones', number_key: 8, name_key: 'inversiones_en_acciones', active: true, capturable: true, parent_id: 20}, #24
    {name: 'Inversiones en acciones nacionales', key: 'Inversiones en acciones nacionales', number_key: nil, name_key: 'inversiones_en_acciones_nacionales', active: false, capturable: false, parent_id: 24}, #25
    {name: 'Inversiones en acciones del extranjero', key: 'Inversiones en acciones del extranjero', number_key: nil, name_key: 'inversiones_en_acciones_del_extranjero', active: false, capturable: false, parent_id: 24}, #26
    {name: 'Construcciones', key: 'Construcciones', number_key: 5, name_key: 'construcciones', active: true, capturable: true, parent_id: 20}, #27
    {name: 'Construcciones', key: 'Construcciones', number_key: nil, name_key: 'construcciones', active: false, capturable: false, parent_id: 27}, #28
    {name: 'Construcciones en proceso', key: 'Construcciones en proceso', number_key: nil, name_key: 'Construcciones en proceso', active: false, capturable: false, parent_id: 27}, #29
    {name: 'Maquinaria y equipo', key: 'Maquinaria y equipo', number_key: 6, name_key: 'maquinaria_y_equipo', active: true, capturable: true, parent_id: 20}, #30
    {name: 'Equipo de transporte', key: 'Equipo de transporte', number_key: 6, name_key: 'equipo_de_transporte', active: true, capturable: true, parent_id: 20}, #31
    {name: 'Depreciación acumulada', key: 'Depreciación acumulada', number_key: 7, name_key: 'depreciacion_acumulada', active: true, capturable: true, parent_id: 20}, #32
    {name: 'Cargos y gastos diferidos', key: 'Cargos y gastos diferidos', number_key: 9, name_key: 'cargos_y_gastos_diferidos', active: true, capturable: true, parent_id: 20}, #33
    {name: 'Amortización acumulada', key: 'Amortización acumulada', number_key: 7, name_key: 'amortizacion_acumulada', active: true, capturable: true, parent_id: 20}, #34
    {name: 'Otros activos fijos', key: 'Otros activos fijos', number_key: 8, name_key: 'otros_activos_fijos', active: true, capturable: true, parent_id: 20}, #35
    {name: 'Pasivo más capital', key: 'Pasivo más capital', number_key: nil, name_key: 'pasivo_mas_capital', active: true, capturable: false, parent_id: nil}, #36
    {name: 'Pasivo total', key: 'Pasivo total', number_key: nil, name_key: 'pasivo_total', active: true, capturable: false, parent_id: 36}, #37
    {name: 'Proveedores', key: 'Proveedores', number_key: 10, name_key: 'proveedores', active: true, capturable: true, parent_id: 37}, #38
    {name: 'Cuentas y documentos por pagar nacionales', key: 'Cuentas y documentos por pagar nacionales', number_key: nil, name_key: 'cuentas_y_documentos_por_pagar_nacionales', active: false, capturable: false, parent_id: 38}, #39
    {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'partes_relacionadas', active: false, capturable: false, parent_id: 39}, #40
    {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'partes_no_relacionadas', active: false, capturable: false, parent_id: 39}, #41
    {name: 'Cuentas y documentos por pagar del extranjero', key: 'Cuentas y documentos por pagar del extranjero', number_key: nil, name_key: 'cuentas_y_documentos_por_pagar_del_extranjero', active: false, capturable: false, parent_id: 38}, #42
    {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'partes_relacionadas', active: false, capturable: false, parent_id: 42}, #443
    {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'partes_no_relacionadas', active: false, capturable: false, parent_id: 42}, #44
    {name: 'Pasivo por impuestos diferidos', key: 'Pasivo por impuestos diferidos', number_key: nil, name_key: 'pasivo_por_impuestos_diferidos', active: true, capturable: false, parent_id: 37}, #45
    {name: 'Contribuciones por pagar', key: 'Contribuciones por pagar', number_key: 11, name_key: 'contribuciones_por_pagar', active: true, capturable: true, parent_id: 45}, #46
    {name: 'Anticipos de clientes', key: 'Anticipos de clientes', number_key: 12, name_key: 'anticipos_de_clientes', active: true, capturable: true, parent_id: 37}, #47
    {name: 'Partes relacionadas', key: 'Partes relacionadas', number_key: nil, name_key: 'partes_relacionadas', active: false, capturable: false, parent_id: 47}, #48
    {name: 'Partes no relacionadas', key: 'Partes no relacionadas', number_key: nil, name_key: 'partes_no_relacionadas', active: false, capturable: false, parent_id: 48}, #49
    {name: 'Aportaciones para futuros aumentos de capital', key: 'Aportaciones para futuros aumentos de capital', number_key: 14, name_key: 'aportaciones_para_futuros_aumentos_de_capital', active: true, capturable: true, parent_id: 37}, #50
    {name: 'Otros pasivos', key: 'Otros pasivos', number_key: 13, name_key: 'otros_pasivos', active: true, capturable: true, parent_id: 37}, #51
    {name: 'Capital total', key: 'Capital total', number_key: nil, name_key: 'capital_total', active: true, capturable: false, parent_id: 36}, #52
    {name: 'Capital social proveniente de aportaciones', key: 'Capital social proveniente de aportaciones', number_key: 14, name_key: 'capital_social_proveniente_de_aportaciones', active: true, capturable: true, parent_id: 52}, #53
    {name: 'Capital social proveniente de capitalización', key: 'Capital social proveniente de capitalización', number_key: 14, name_key: 'capital_social_proveniente_de_capitalizacion', active: true, capturable: true, parent_id: 52}, #54
    {name: 'Reservas', key: 'Reservas', number_key: 17, name_key: 'reservas', active: true, capturable: true, parent_id: 52}, #55
    {name: 'Otras cuentas de capital', key: 'Otras cuentas de capital', number_key: 17, name_key: 'otras_cuentas_de_capital', active: true, capturable: true, parent_id: 52}, #56
    {name: 'Aportaciones para futuros aumentos de capital', key: 'Aportaciones para futuros aumentos de capital', number_key: 14, name_key: 'aportaciones_para_futuros_aumentos_de_capital', active: true, capturable: true, parent_id: 52}, #57
    {name: 'Utilidades acumuladas', key: 'Utilidades acumuladas', number_key: 15, name_key: 'utilidades_acumuladas', active: true, capturable: true, parent_id: 52}, #58
    {name: 'Utilidad del ejercicio', key: 'Utilidad del ejercicio', number_key: 16, name_key: 'utilidad_del_ejercicio', active: true, capturable: true, parent_id: 52}, #59
    {name: 'Pérdidas acumuladas', key: 'Pérdidas acumuladas', number_key: 15, name_key: 'perdidas_acumuladas', active: true, capturable: true, parent_id: 52}, #60
    {name: 'Pérdida del ejercicio', key: 'Pérdida del ejercicio', number_key: 16, name_key: 'perdida_del_ejercicio', active: true, capturable: true, parent_id: 52}, #61
    {name: 'Exceso en la actualización del capital', key: 'Exceso en la actualización del capital', number_key: 15, name_key: 'exceso_en_la_actualizacion_del_capital', active: true, capturable: true, parent_id: 52}, #62
    {name: 'Insuficiencia en la actualización del capital', key: 'Insuficiencia en la actualización del capital', number_key: 15, name_key: 'insuficiencia_en_la_actualizacion_del_capital', active: true, capturable: true, parent_id: 52}, #63
    {name: 'Actualización del capital contable', key: 'Actualización del capital contable', number_key: 15, name_key: 'actualizacion_del_capital_contable', active: true, capturable: true, parent_id: 52}, #64

])