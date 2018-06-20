import * as ListingAPIUtil from '../utils/listings';

const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
const RECEIVE_LISTING = 'RECEIVE_LISTING';
const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveAllListings = listings => ({
	type: RECEIVE_ALL_LISTINGS,
	listings
});

const receiveListing = listing => ({
	type: RECEIVE_LISTING,
	listing
});

const removeListing = listing => ({
	type: REMOVE_LISTING,
	listing
});

const fetchListings = () => dispatch =>
	ListingAPIUtil.fetchListings().then(payload => {
		dispatch(receiveAllListings(payload));
	});

const fetchListing = id => dispatch =>
	ListingAPIUtil.fetchListing(id).then(payload => {
		dispatch(receiveListing(payload[id]));
	});

const createListing = listing => dispatch =>
	ListingAPIUtil.createListing(listing).then(payload => {
		dispatch(receiveListing(payload));
	});

const updateListing = listing => dispatch =>
	ListingAPIUtil.updateListing(listing).then(payload => {
		dispatch(receiveListing(payload));
	});

const deleteListing = listing => dispatch =>
	ListingAPIUtil.destroyListing(listing).then(payload => {
		dispatch(removeListing(payload));
	});

export {
	RECEIVE_ALL_LISTINGS,
	RECEIVE_LISTING,
	REMOVE_LISTING,
	fetchListings,
	fetchListing,
	createListing,
	updateListing,
	deleteListing
};
