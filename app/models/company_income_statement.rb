# == Schema Information
#
# Table name: company_income_statements
#
#  id                          :bigint           not null, primary key
#  value                       :string
#  year                        :string
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  company_id                  :bigint           not null
#  income_statement_concept_id :bigint           not null
#
# Indexes
#
#  index_company_income_statements_on_company_id                   (company_id)
#  index_company_income_statements_on_income_statement_concept_id  (income_statement_concept_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (income_statement_concept_id => income_statement_concepts.id)
#
class CompanyIncomeStatement < ApplicationRecord
end
