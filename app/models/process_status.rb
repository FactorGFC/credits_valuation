# == Schema Information
#
# Table name: process_statuses
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  key        :string
#  name       :string
#  order      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProcessStatus < ApplicationRecord

  #scopes
  scope :first_step, ->{self.first.try(:id)}
end
