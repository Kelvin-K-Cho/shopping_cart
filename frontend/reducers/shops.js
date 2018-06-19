import { RECEIVE_ALL_SHOPS, RECEIVE_SHOP, REMOVE_SHOP } from '../actions/shops';
import merge from 'lodash/merge';

const ShopsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_SHOPS:
			return merge({}, action.suggestions);
		case RECEIVE_SHOP:
			return merge({}, oldState, {
				[action.shop.id]: action.shop
			});
		case REMOVE_SHOP:
			let newState = merge({}, oldState);
			delete newState[action.shop.id];
			return newState;
		default:
			return oldState;
	}
};

export default ShopsReducer;
