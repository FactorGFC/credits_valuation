# == Schema Information
#
# Table name: number_collaborators
#
#  id             :bigint           not null, primary key
#  administrative :integer
#  eventual       :integer
#  operative      :integer
#  sales          :integer
#  total          :integer
#  unionized      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  company_id     :integer          not null
#
# Indexes
#
#  index_number_collaborators_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#

class NumberCollaborator < ApplicationRecord
end
