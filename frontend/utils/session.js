const postUser = user =>
	$.ajax({
		method: 'POST',
		url: `api/users`,
		data: { user }
	});

const postSession = user =>
	$.ajax({
		method: 'POST',
		url: `api/session`,
		data: { user }
	});

const deleteSession = () =>
	$.ajax({
		method: 'DELETE',
		url: `api/session`
	});

export { postUser, postSession, deleteSession };
