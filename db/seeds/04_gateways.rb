demo_id = User.where(username: "demo").pluck(:id).first

Gateway.create(
  location: 'Foster City',
  full_name: 'Kelvin Cho',
  account_type: '1234567890',
  routing_number: '0987654321',
  first_name: 'Kelvin',
  last_name: 'Cho',
  birthdate: '1/1/1990',
  ssn: '1234',
  address: '950 Tower Lane',
  city: 'Foster City',
  state: 'CA',
  postal_code: '94404',
  user_id: demo_id
)
