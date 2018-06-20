import { combineReducers } from 'redux';
import ShopsReducer from './shops';
import ListingsReducer from './listings';

const EntitiesReducer = combineReducers({
	shops: ShopsReducer,
	listings: ListingsReducer
});

export default EntitiesReducer;
