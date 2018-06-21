class Api::GatewaysController < ApplicationController

  def index
    if params[:user_id]
      @gateways = Gateway.where('user_id', params[:user_id]).order(id: :asc)
    else
      @gateways = Gateway.all
    end
  end

  def show
    @gateway = Gateway.find(params[:id])
  end

  def create
    @gateway = Gateway.new(gateway_params)
    @gateway.user_id = current_user.id
    if @gateway.save
      render @gateway
    else
      render json: @gateway.errors.full_messages, status: 422
    end
  end

  def update
    @gateway = current_user.gateways.find(params[:id])
    if @gateway && @gateway.update(gateway_params)
      render @gateway
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @gateway = current_user.gateways.find(params[:id])
    if @gateway
      @gateway.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def gateway_params
    params.require(:gateway).permit(:location, :full_name, :account_type, :routing_number, :first_name, :last_name, :birthdate, :ssn, :address, :city, :state, :postal_code)
  end

end
