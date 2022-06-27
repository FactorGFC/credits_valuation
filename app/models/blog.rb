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

class Blog < ApplicationRecord
  require 'base64'

  has_one :blog_type
  has_one :position

  validates_presence_of :image

  def encode_image file
    Base64.strict_encode64(file.read)
  end

end
