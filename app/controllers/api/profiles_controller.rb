class Api::ProfilesController < ApplicationController

  def index
    if params[:user_id]
      @profiles = Profile.where('user_id', params[:user_id]).order(id: :asc)
    else
      @profiles = Profile.all
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id
    if @profile.save
      render @profile
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    @profile = current_user.profiles.find(params[:id])
    if @profile && @profile.update(profile_params)
      render @profile
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @profile = current_user.profiles.find(params[:id])
    if @profile
      @profile.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:username, :full_name, :state, :city, :dob, :twenty_one)
  end

end
