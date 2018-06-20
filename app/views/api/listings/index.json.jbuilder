@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :category, :description, :tags, :price, :shipping, :time, :weight, :length, :width, :height, :user_id
  end
end
