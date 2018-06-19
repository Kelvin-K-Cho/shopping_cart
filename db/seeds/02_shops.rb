demo_id = User.where(username: "demo").pluck(:id).first

Shop.create(
  name: "Boring Shop",
  category: "Flowers",
  state: "California",
  city: "Foster City",
  user_id: demo_id
)
