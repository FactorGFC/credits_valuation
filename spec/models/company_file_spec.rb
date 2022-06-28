# == Schema Information
#
# Table name: company_files
#
#  id                                   :bigint           not null, primary key
#  authorization_file                   :text
#  authorization_name                   :string
#  constancy_file                       :text
#  constancy_name                       :string
#  financial_statements_one_file        :text
#  financial_statements_one_name        :string
#  financial_statements_parcial_file    :text
#  financial_statements_parcial_name    :string
#  financial_statements_two_file        :text
#  financial_statements_two_name        :string
#  id_file                              :text
#  id_name                              :string
#  invoice_authorization                :string
#  invoice_constancy                    :string
#  invoice_financial_statements_one     :string
#  invoice_financial_statements_parcial :string
#  invoice_financial_statements_two     :string
#  invoice_id_file                      :string
#  name_authorization                   :string
#  name_constancy                       :string
#  name_financial_statements_one        :string
#  name_financial_statements_parcial    :string
#  name_financial_statements_two        :string
#  name_id_file                         :string
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#  company_id                           :integer          not null
#
# Indexes
#
#  index_company_files_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

require 'rails_helper'

RSpec.describe CompanyFile, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
