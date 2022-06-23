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

class StatusCompany < ApplicationRecord
  has_many :companies
end
