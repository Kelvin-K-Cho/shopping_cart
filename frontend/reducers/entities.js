import { combineReducers } from 'redux';
import ShopsReducer from './shops';

const EntitiesReducer = combineReducers({
	shops: ShopsReducer
});

export default EntitiesReducer;
