# == Schema Information
#
# Table name: status_companies
#
#  id          :bigint           not null, primary key
#  description :string
#  key         :string
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryBot.define do
  factory :status_company do
    
    audited
    has_associated_audits
  end


end
