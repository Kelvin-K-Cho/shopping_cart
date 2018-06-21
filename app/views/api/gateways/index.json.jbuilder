@gateways.each do |gateway|
  json.set! gateway.id do
    json.extract! gateway, :id, :location, :full_name, :account_type, :routing_number, :first_name, :last_name, :birthdate, :ssn, :address, :city, :state, :postal_code, :user_id
  end
end
