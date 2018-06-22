import { combineReducers } from 'redux';
import ShopsReducer from './shops';
import ListingsReducer from './listings';
import GatewaysReducer from './gateways';
import NotificationsReducer from './notifications';
import ProfilesReducer from './profiles';

const EntitiesReducer = combineReducers({
	shops: ShopsReducer,
	listings: ListingsReducer,
	gateways: GatewaysReducer,
	notifications: NotificationsReducer,
	profiles: ProfilesReducer
});

export default EntitiesReducer;
