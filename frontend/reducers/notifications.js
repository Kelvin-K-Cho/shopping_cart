import {
	RECEIVE_ALL_NOTIFICATIONS,
	RECEIVE_NOTIFICATION,
	REMOVE_NOTIFICATION
} from '../actions/notifications';
import merge from 'lodash/merge';

const NotificationsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_NOTIFICATIONS:
			return merge({}, action.notifications);
		case RECEIVE_NOTIFICATION:
			return merge({}, oldState, {
				[action.notification.id]: action.notification
			});
		case REMOVE_NOTIFICATION:
			let newState = merge({}, oldState);
			delete newState[action.notification.id];
			return newState;
		default:
			return oldState;
	}
};

export default NotificationsReducer;
