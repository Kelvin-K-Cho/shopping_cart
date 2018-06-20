const fetchListings = () =>
	$.ajax({
		method: 'GET',
		url: `api/listings`
	});

const fetchListing = id =>
	$.ajax({
		method: 'GET',
		url: `api/listings/${id}`
	});

const createListing = listing =>
	$.ajax({
		method: 'POST',
		url: `api/listings`,
		data: { listing }
	});

const updateListing = listing =>
	$.ajax({
		method: 'PUT',
		url: `api/listings/${listing.id}`,
		data: { listing }
	});

const destroyListing = listing =>
	$.ajax({
		method: 'DELETE',
		url: `api/listings/${listing.id}`
	});

export {
	fetchListings,
	fetchListing,
	createListing,
	updateListing,
	destroyListing
};
