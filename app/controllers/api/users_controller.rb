class Api::UsersController < ApplicationController
  # Create method for making a new user.
  def create

    # Create a temporary instance variable for the user given the parameters.
    @user = User.new(user_params)

    # If the user can be saved to the database.
    if @user.save

      # Login the user as the current session.
      login!(@user)

      # Return the user.
      render @user

    # Otherwise...
    else

      # Return an error about how the user can't be saved to the database.
      render json: @user.errors.full_messages, status: 422
    end


  end

  # Method to see if the user can be found.
  def show

    # Create a variable to hold the user given the user id.
    @user = User.find(params[:id])

    # Implicitly return "render :show"
  end

  # Create a private method to enforce constraints on how user_params.
  private

  def user_params

    # Only accept username and password as inputs for users.
    params.require(:user).permit(:username, :password)
  end

end
