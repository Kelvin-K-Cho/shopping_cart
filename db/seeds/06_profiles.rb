demo_id = User.where(username: "demo").pluck(:id).first

Profile.create(
  username: 'demo',
  full_name: 'Kelvin Cho',
  state: 'CA',
  city: 'Foster City',
  dob: '11/20/1989',
  twenty_one: 'true',
  user_id: demo_id
)
