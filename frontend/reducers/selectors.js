import values from 'lodash/values';

const selectShops = state => values(state.entities.shops);
const selectListings = state => values(state.entities.listings);
const selectGateways = state => values(state.entities.gateways);
const selectNotifications = state => values(state.entities.notifications);
const selectProfiles = state => values(state.entities.profiles);

export {
	selectShops,
	selectListings,
	selectGateways,
	selectNotifications,
	selectProfiles
};
