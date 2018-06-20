json.set! @listing.id do
  json.partial! "api/listings/listing", listing: @listing
end
