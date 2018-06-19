@shops.each do |shop|
  json.set! shop.id do
    json.extract! shop, :id, :name, :category, :state, :city, :user_id
  end
end
