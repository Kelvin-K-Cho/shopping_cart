import * as ProfileAPIUtil from '../utils/profiles';

const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
const REMOVE_PROFILE = 'REMOVE_PROFILE';

const receiveAllProfiles = profiles => ({
	type: RECEIVE_ALL_PROFILES,
	profiles
});

const receiveProfile = profile => ({
	type: RECEIVE_PROFILE,
	profile
});

const removeProfile = profile => ({
	type: REMOVE_PROFILE,
	profile
});

const fetchProfiles = () => dispatch =>
	ProfileAPIUtil.fetchProfiles().then(payload => {
		dispatch(receiveAllProfiles(payload));
	});

const fetchProfile = id => dispatch =>
	ProfileAPIUtil.fetchProfile(id).then(payload => {
		dispatch(receiveProfile(payload[id]));
	});

const createProfile = profile => dispatch =>
	ProfileAPIUtil.createProfile(profile).then(payload => {
		dispatch(receiveProfile(payload));
	});

const updateProfile = profile => dispatch =>
	ProfileAPIUtil.updateProfile(profile).then(payload => {
		dispatch(receiveProfile(payload));
	});

const deleteProfile = profile => dispatch =>
	ProfileAPIUtil.destroyProfile(profile).then(payload => {
		dispatch(removeProfile(payload));
	});

export {
	RECEIVE_ALL_PROFILES,
	RECEIVE_PROFILE,
	REMOVE_PROFILE,
	fetchProfiles,
	fetchProfile,
	createProfile,
	updateProfile,
	deleteProfile
};
