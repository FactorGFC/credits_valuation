# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  assigned_to :string
#  comment     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  company_id  :bigint           not null
#  user_id     :bigint           not null
#
# Indexes
#
#  index_comments_on_company_id  (company_id)
#  index_comments_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :comment do
    comment "MyString"
    user nil
    assigned_to "MyString"
    company nil
  end
end
