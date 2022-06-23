# == Schema Information
#
# Table name: company_files
#
#  id                                :bigint           not null, primary key
#  authorization_file                :text
#  authorization_name                :string
#  constancy_file                    :text
#  constancy_name                    :string
#  financial_statements_one_file     :text
#  financial_statements_one_name     :string
#  financial_statements_parcial_file :text
#  financial_statements_parcial_name :string
#  financial_statements_two_file     :text
#  financial_statements_two_name     :string
#  id_file                           :text
#  id_name                           :string
#  created_at                        :datetime         not null
#  updated_at                        :datetime         not null
#  company_id                        :integer          not null
#
# Indexes
#
#  index_company_files_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

class CompanyFile < ApplicationRecord
end
