json.set! @notification.id do
  json.partial! "api/notifications/notification", notification: @notification
end
