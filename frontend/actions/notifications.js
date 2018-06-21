import * as NotificationAPIUtil from '../utils/notifications';

const RECEIVE_ALL_NOTIFICATIONS = 'RECEIVE_ALL_NOTIFICATIONS';
const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const receiveAllNotifications = notifications => ({
	type: RECEIVE_ALL_NOTIFICATIONS,
	notifications
});

const receiveNotification = notification => ({
	type: RECEIVE_NOTIFICATION,
	notification
});

const removeNotification = notification => ({
	type: REMOVE_NOTIFICATION,
	notification
});

const fetchNotifications = () => dispatch =>
	NotificationAPIUtil.fetchNotifications().then(payload => {
		dispatch(receiveAllNotifications(payload));
	});

const fetchNotification = id => dispatch =>
	NotificationAPIUtil.fetchNotification(id).then(payload => {
		dispatch(receiveNotification(payload[id]));
	});

const createNotification = notification => dispatch =>
	NotificationAPIUtil.createNotification(notification).then(payload => {
		dispatch(receiveNotification(payload));
	});

const updateNotification = notification => dispatch =>
	NotificationAPIUtil.updateNotification(notification).then(payload => {
		dispatch(receiveNotification(payload));
	});

const deleteNotification = notification => dispatch =>
	NotificationAPIUtil.destroyNotification(notification).then(payload => {
		dispatch(removeNotification(payload));
	});

export {
	RECEIVE_ALL_NOTIFICATIONS,
	RECEIVE_NOTIFICATION,
	REMOVE_NOTIFICATION,
	fetchNotifications,
	fetchNotification,
	createNotification,
	updateNotification,
	deleteNotification
};
