p '==> creating Conciliation Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
ConciliationConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('conciliation_concepts')


ConciliationConcept.create!([
    { name: 'DIVIDENDOS PAGADOS EN EFECTIVO', key: 'dividendos_pagados_efectivo', active: true }
])