class ApplicationController < ActionController::Base

  # Default rails helper method to prevent CSRF attacks.
  # Basically, it stores an authenticity token on the user's session.
  # Any time a non-GET request is made, it checks if the token matches the one provided.
  protect_from_forgery with: :exception

  # Defining additional helper methods to be called elsewhere.
  helper_method :current_user, :logged_in?

  # Method to "login" the user by setting the user's session as the current session.
  def login!(user)

    # Store the user as the current_user.
    @current_user = user

    # Set the session_token to the user's session_token.
    session[:session_token] = user.reset_session_token!

  end

  # Method for retrieving the current_user.
  def current_user

    # If there is no session_token, no user is logged in.  Ergo, return nil.
    return nil unless session[:session_token]

    # Otherwise, return the stored current_user.  If this was lost,
    # find the user by session_token.
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  # Method to return true/false for a current_user.
  def logged_in?

    # If the current_user does not exist, the return value is nil.
    # Although nil is falsy, nil is not the same as false.
    # By using !!, we turn it truthy then back to falsy.
    !!current_user

  end

  # Method to ensure the user is logged in.
  def require_login

    # If the user is not logged in, they are redirected to the root.
    redirect_to root unless logged_in?

  end

  # Method to destroy the current session.
  def logout!

    # Execute the reset_session_token method after finding current_user.
    # This line alone will destroy the session since they do not match.
    current_user.reset_session_token!

    # Set the current session_token to nil
    # This other line alone can also destroy the session.
    session[:session_token] = nil

    # Both methods are done for best practices.
  end
  
end
