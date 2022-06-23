# == Schema Information
#
# Table name: blogs
#
#  id          :bigint           not null, primary key
#  description :text
#  image       :text
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryBot.define do
  factory :blog do
    title "MyString"
    descripcion "MyString"
    image "MyText"
  end
end
