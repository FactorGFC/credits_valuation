# Disable auditing
#Position.auditing_enabled = false

# Delete all roles
CreditType.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('credit_types')

CreditType.create!([
                  {name: 'ACCC'},
                  {name: 'ACS'},
                  {name: 'ACS puente'},
                  {name: 'Arriend. Financiero'},
                  {name: 'Arrend. Puro'},
                  {name: 'Factoraje'},
                  {name: 'H.Avio'},
                  {name: 'PQ'},
                  {name: 'Refacc'}
                 ])
