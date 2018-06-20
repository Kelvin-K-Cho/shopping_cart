class Api::ListingsController < ApplicationController

  def index
    if params[:user_id]
      @listings = Listing.where('user_id', params[:user_id]).order(id: :asc)
    else
      @listings = Listing.all
    end
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.user_id = current_user.id
    if @listing.save
      render @listing
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = current_user.listings.find(params[:id])
    if @listing && @listing.update(listing_params)
      render @listing
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @listing = current_user.listing.find(params[:id])
    if @listing
      @listing.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:title, :category, :description, :tags, :price, :shipping, :time, :weight, :length, :width, :height)
  end

end
