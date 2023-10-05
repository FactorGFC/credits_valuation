# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  avatar                 :string
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           default(""), not null
#  employee_number        :string
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  new_password           :string
#  phone                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  company_id             :bigint
#  role_id                :bigint
#  sat_id                 :string
#
# Indexes
#
#  index_users_on_company_id            (company_id)
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE WHERE (confirmation_token IS NOT NULL)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE WHERE (reset_password_token IS NOT NULL)
#  index_users_on_role_id               (role_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (role_id => roles.id)
#


class User < ApplicationRecord

  audited except: %i[created_at updated_at remember_created_at]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
  :recoverable, :rememberable, :trackable, :validatable, :timeoutable

  belongs_to :role
  belongs_to :company, optional: true


  delegate :scope, :key, :name, to: :role, prefix: true, allow_nil: true

  mount_uploader :avatar, AvatarUploader

  validates_presence_of :first_name, :last_name, :email, :phone, :role_id

  after_update :recreate_avatar_thumb

  def god?
    role_key.eql?('god')
  end

  def enterprise?
    role_key.eql?('enterprise')
  end

  def analyst?
    role_key.eql?('analyst')
  end

  def committee?
    role_key.eql?('committee')
  end

  def credit_management?
    role_key.eql?('credit_management')
  end

  def credit_area?
    role_key.eql?('credit_area')
  end

  def promotion_area?
    role_key.eql?('promotion_area')
  end

  def super_user?
    role_key.in?(['god', 'credit_management', 'credit_area', 'promotion_area'])
  end

  def user_asign_periods?
    role_key.in?(['god', 'credit_area', 'promotion_area'])
  end

  def has_total_scope?
    role_scope.eql?('total')
  end

  def full_name
    "#{self.first_name} #{self.last_name}"
  end


=begin
  ransacker :first_name, type: :string do
    Arel.sql("unaccent(\"first_name\")")
  end

  ransacker :last_name, type: :string do
    Arel.sql("unaccent(\"last_name\")")
  end
=end

  def recreate_avatar_thumb
    self.avatar.recreate_versions!(:thumb) if self.avatar?
  end

  def avatar_thumb
    self.avatar? ? self.avatar_url(:thumb) : 'missing.png'
  end

end
