import {
	RECEIVE_ALL_PROFILES,
	RECEIVE_PROFILE,
	REMOVE_PROFILE
} from '../actions/profiles';
import merge from 'lodash/merge';

const ProfilesReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_PROFILES:
			return merge({}, action.profiles);
		case RECEIVE_PROFILE:
			return merge({}, oldState, {
				[action.profile.id]: action.profile
			});
		case REMOVE_PROFILE:
			let newState = merge({}, oldState);
			delete newState[action.profile.id];
			return newState;
		default:
			return oldState;
	}
};

export default ProfilesReducer;
