@shops.each do |shop|
  json.set! shop.id do
    json.extract! shop, :id, :name, :type, :state, :city, :user_id
  end
end
