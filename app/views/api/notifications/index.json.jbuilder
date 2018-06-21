@notifications.each do |notification|
  json.set! notification.id do
    json.extract! notification, :id, :option, :info, :time, :user_id
  end
end
