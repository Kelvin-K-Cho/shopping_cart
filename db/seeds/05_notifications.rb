demo_id = User.where(username: "demo").pluck(:id).first

Notification.create(
  option: "e-mail",
  info: "kelvin.cho@n3n.io",
  time: "12:00 AM",
  user_id: demo_id
)
