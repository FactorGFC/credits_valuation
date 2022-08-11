p '==> creating Flow Concepts'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
FlowConcept.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('flow_concepts')


FlowConcept.create!([
                      { name: 'FLUJO NETO', key: 'flujo_neto', active: true }
                  ])