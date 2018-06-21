class Api::NotificationsController < ApplicationController

  def index
    if params[:user_id]
      @notifications = Notification.where('user_id', params[:user_id]).order(id: :asc)
    else
      @notifications = Notification.all
    end
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def create
    @notification = Notification.new(notification_params)
    @notification.user_id = current_user.id
    if @notification.save
      render @notification
    else
      render json: @notification.errors.full_messages, status: 422
    end
  end

  def update
    @notification = current_user.notifications.find(params[:id])
    if @notification && @notification.update(notification_params)
      render @notification
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @notification = current_user.notifications.find(params[:id])
    if @notification
      @notification.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def notification_params
    params.require(:notification).permit(:option, :info, :time)
  end

end
