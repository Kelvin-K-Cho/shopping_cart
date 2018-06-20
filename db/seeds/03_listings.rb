demo_id = User.where(username: "demo").pluck(:id).first

Listing.create(
  title: "Roses",
  category: "Bouquet",
  description: "Red Flowers",
  tags: ['flowers'],
  price: 9.99,
  shipping: 2.99,
  time: "2 days",
  weight: "2 pounds",
  length: "4 inches",
  width: "1 cm",
  height: "5 cm",
  user_id: demo_id
)
