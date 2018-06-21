const fetchNotifications = () =>
	$.ajax({
		method: 'GET',
		url: `api/notifications`
	});

const fetchNotification = id =>
	$.ajax({
		method: 'GET',
		url: `api/notifications/${id}`
	});

const createNotification = notification =>
	$.ajax({
		method: 'POST',
		url: `api/notifications`,
		data: { notification }
	});

const updateNotification = notification =>
	$.ajax({
		method: 'PUT',
		url: `api/notifications/${notification.id}`,
		data: { notification }
	});

const destroyNotification = notification =>
	$.ajax({
		method: 'DELETE',
		url: `api/notifications/${notification.id}`
	});

export {
	fetchNotifications,
	fetchNotification,
	createNotification,
	updateNotification,
	destroyNotification
};
