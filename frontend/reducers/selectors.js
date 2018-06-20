import values from 'lodash/values';

const selectShops = state => values(state.entities.shops);
const selectListings = state => values(state.entities.listings);

export { selectShops, selectListings };
