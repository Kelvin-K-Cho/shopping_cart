class Api::ShopsController < ApplicationController

  def index
    if params[:user_id]
      @shops = Shop.where('user_id', params[:user_id]).order(id: :asc)
    else
      @shops = Shop.all
    end
  end

  def show
    @shop = Shop.find(params[:id])
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.user_id = current_user.id
    if @shop.save
      render @shop
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  def update
    @shop = current_user.shops.find(params[:id])
    if @shop && @shop.update(shop_params)
      render @shop
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @shop = current_user.shops.find(params[:id])
    if @shop
      @shop.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:name, :category, :state, :city)
  end

end
