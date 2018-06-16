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

  # Ensures that the instance of a user cannot exist unless the user has a unique username.
 validates :username, presence: true, uniqueness: true

 # Ensures that the session_token and password_digest exist for the user to be valid.
 validates :session_token, :password_digest, presence: true

 # Ensures the password is at least 6 characters long and can be nil.
 # password is different from password_digest where the latter is actually stored.
 validates :password, length: { minimum: 6, allow_nil: true }

 # Define an instance variable to hold the password.
 attr_reader :password

 # After the user object has been instantiated, it will run ensure session_token.
 # This will make sure that there's always a session_token available for the logged in user.
 after_initialize :ensure_session_token

 # Method to lookup the credentials of the entered username and password.
 def self.find_by_credentials(username, password)

   # Create a temporary variable and set it to the user by looking up the username.
   user = User.find_by(username: username)

   # If the user exists and the entered password matches the stored password,
   # return the user.  Otherwise, return nil.
   user && user.is_password?(password) ? user : nil

 end

 # Writer method for storing the password.
 def password=(password)

   # Store the password in the instance variable.
   @password = password

   # Set the password_digest to the hashed version of the password.
   self.password_digest = BCrypt::Password.create(password)

 end

 # Method to check if the entered password matches the stored password.
 def is_password?(password)

   # Turn the password_digest into the password and check against the password.
   # The is_password? method here is the one found from BCrypt, not the one from the user class.
   BCrypt::Password.new(self.password_digest).is_password?(password)

 end

 # Method to check the session token.
 def ensure_session_token

   # If the session token already exists, return that session_token.
   # Otherwise, create a new random session_token to verify across the browser.
   self.session_token ||= SecureRandom.urlsafe_base64

 end

 # Method to change the session_token.
 def reset_session_token!

   # Change the session token to a new one.
   self.session_token = SecureRandom.urlsafe_base64
   # Store the new session_token in the database.
   self.save!
   # Return the new session_token.
   self.session_token

 end

end
