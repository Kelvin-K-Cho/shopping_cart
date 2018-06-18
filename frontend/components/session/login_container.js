import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mapDispatchToProps = dispatch => ({
	login: formUser => dispatch(login(formUser))
});

const LoginContainer = connect(
	null,
	mapDispatchToProps
)(Login);

export default LoginContainer;
