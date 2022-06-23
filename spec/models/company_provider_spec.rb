# == Schema Information
#
# Table name: company_providers
#
#  id         :bigint           not null, primary key
#  credit     :string
#  name       :string
#  purchase   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  company_id :integer          not null
#
# Indexes
#
#  index_company_providers_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

require 'rails_helper'

RSpec.describe CompanyProvider, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
