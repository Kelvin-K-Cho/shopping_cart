import * as SessionAPIUtil from '../utils/session';

const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
	type: RECEIVE_CURRENT_USER,
	user
});

const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

const createNewUser = formUser => dispatch =>
	SessionAPIUtil.postUser(formUser).then(user =>
		dispatch(receiveCurrentUser(user))
	);

const login = formUser => dispatch =>
	SessionAPIUtil.postSession(formUser).then(user =>
		dispatch(receiveCurrentUser(user))
	);

const logout = () => dispatch =>
	SessionAPIUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));

export {
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER,
	createNewUser,
	login,
	logout
};
