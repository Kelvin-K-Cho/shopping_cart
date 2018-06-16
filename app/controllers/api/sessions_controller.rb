class Api::SessionsController < ApplicationController

  # Method to access an existing user in the database.
  def create

    # Set the user instance variable by leveraging user's find_by_credentials method.
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    # If the user exists,
    if @user

      # Login the user.
      login!(@user)

      # Return the user.
      render @user

    # Otherwise,
    else

      # Return the error.
      render json: ['Invalid username or password'], status: 401
    end
  end

  # Method to destroy the session.
  def destroy

    # Call the logout method inherited from ApplicationController
    logout!

  end

end
