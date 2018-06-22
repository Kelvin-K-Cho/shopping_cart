@profiles.each do |profile|
  json.set! profile.id do
    json.extract! profile, :id, :username, :full_name, :state, :city, :dob, :twenty_one, :user_id
  end
end
