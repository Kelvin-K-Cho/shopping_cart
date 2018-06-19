import values from 'lodash/values';

const selectShops = state => values(state.entities.shops);

export { selectShops };
