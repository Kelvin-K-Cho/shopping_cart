const fetchProfiles = () =>
	$.ajax({
		method: 'GET',
		url: `api/profiles`
	});

const fetchProfile = id =>
	$.ajax({
		method: 'GET',
		url: `api/profiles/${id}`
	});

const createProfile = profile =>
	$.ajax({
		method: 'POST',
		url: `api/profiles`,
		data: { profile }
	});

const updateProfile = profile =>
	$.ajax({
		method: 'PUT',
		url: `api/profiles/${profile.id}`,
		data: { profile }
	});

const destroyProfile = profile =>
	$.ajax({
		method: 'DELETE',
		url: `api/profiles/${profile.id}`
	});

export {
	fetchProfiles,
	fetchProfile,
	createProfile,
	updateProfile,
	destroyProfile
};
