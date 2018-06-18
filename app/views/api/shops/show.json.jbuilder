json.set! @shop.id do
  json.partial! "api/shops/shop", shop: @shop
end
