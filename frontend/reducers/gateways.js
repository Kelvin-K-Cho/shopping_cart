import {
	RECEIVE_ALL_GATEWAYS,
	RECEIVE_GATEWAY,
	REMOVE_GATEWAY
} from '../actions/gateways';
import merge from 'lodash/merge';

const GatewaysReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_GATEWAYS:
			return merge({}, action.gateways);
		case RECEIVE_GATEWAY:
			return merge({}, oldState, {
				[action.gateway.id]: action.gateway
			});
		case REMOVE_GATEWAY:
			let newState = merge({}, oldState);
			delete newState[action.gateway.id];
			return newState;
		default:
			return oldState;
	}
};

export default GatewaysReducer;
