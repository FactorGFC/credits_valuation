# == Schema Information
#
# Table name: positions
#
#  id           :bigint           not null, primary key
#  name         :string
#  order        :integer
#  blog_id      :integer
#  blog_type_id :bigint
#
# Indexes
#
#  index_positions_on_blog_id       (blog_id)
#  index_positions_on_blog_type_id  (blog_type_id)
#
# Foreign Keys
#
#  fk_rails_...  (blog_id => blogs.id)
#  fk_rails_...  (blog_type_id => blog_types.id)
#

class Position < ApplicationRecord
  belongs_to  :blog, optional: true
  belongs_to  :blog_type
end
