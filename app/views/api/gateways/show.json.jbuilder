json.set! @gateway.id do
  json.partial! "api/gateways/gateway", gateway: @gateway
end
