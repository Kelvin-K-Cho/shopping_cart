# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

 validates :username, presence: true, uniqueness: true
 validates :session_token, :password_digest, presence: true
 validates :password, length: { minimum: 6, allow_nil: true }

 attr_reader :password

 after_initialize :ensure_session_token

  has_many :shops,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Shop

  has_many :listings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Listing

  has_many :gateways,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Gateway

  has_many :notifications,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Notification

  has_many :profiles,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Profile

 def self.find_by_credentials(username, password)
   user = User.find_by(username: username)
   user && user.is_password?(password) ? user : nil
 end

 def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
 end

 def is_password?(password)
   BCrypt::Password.new(self.password_digest).is_password?(password)
 end

 def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64
 end

 def reset_session_token!
   self.session_token = SecureRandom.urlsafe_base64
   self.save!
   self.session_token
 end

end
