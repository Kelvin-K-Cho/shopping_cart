import * as ListingAPIUtil from '../utils/listings';

const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
const RECEIVE_LISTING = 'RECEIVE_LISTING';
const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveAllListings = listings => ({
	type: RECEIVE_ALL_LISTINGS,
	listings
});
