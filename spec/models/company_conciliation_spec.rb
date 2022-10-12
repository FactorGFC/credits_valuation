# == Schema Information
#
# Table name: company_conciliations
#
#  id                      :bigint           not null, primary key
#  value                   :float
#  value_scale             :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  calendar_id             :bigint           not null
#  company_id              :bigint           not null
#  conciliation_concept_id :bigint           not null
#
# Indexes
#
#  index_company_conciliations_on_calendar_id              (calendar_id)
#  index_company_conciliations_on_company_id               (company_id)
#  index_company_conciliations_on_conciliation_concept_id  (conciliation_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (calendar_id => calendars.id)
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (conciliation_concept_id => conciliation_concepts.id)
#
require 'rails_helper'

RSpec.describe CompanyConciliation, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
