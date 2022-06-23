# == Schema Information
#
# Table name: company_clients
#
#  id         :bigint           not null, primary key
#  credit     :string
#  name       :string
#  sales      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  company_id :integer          not null
#
# Indexes
#
#  index_company_clients_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

FactoryBot.define do
  factory :company_client do
    name "MyString"
    sales "MyString"
    credit "MyString"
  end
end
