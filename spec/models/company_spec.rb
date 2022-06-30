# == Schema Information
#
# Table name: companies
#
#  id                        :bigint           not null, primary key
#  address                   :string
#  balance_sheet             :jsonb
#  balance_sheet_finished    :boolean
#  cer_encoded               :text
#  client_type               :string
#  complete                  :boolean
#  credential_company        :jsonb
#  group_company             :boolean
#  has_clients               :boolean
#  has_providers             :boolean
#  income_statement_finished :boolean
#  income_statment           :jsonb
#  info_company              :jsonb
#  key_encoded               :text
#  main_activity             :string
#  main_products             :string
#  name                      :string
#  rfc                       :string
#  sat_password              :string
#  step_five                 :boolean
#  step_four                 :boolean
#  step_one                  :boolean
#  step_six                  :boolean
#  step_three                :boolean
#  step_two                  :boolean
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  buro_id                   :string
#  sat_id                    :string
#  status_company_id         :bigint
#
# Indexes
#
#  index_companies_on_status_company_id  (status_company_id)
#
# Foreign Keys
#
#  fk_rails_...  (status_company_id => status_companies.id)
#

require 'rails_helper'

RSpec.describe Company, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
