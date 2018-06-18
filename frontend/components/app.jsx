import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Wrapper from './loader/wrapper';
import Loadable from 'react-loadable';

const NavigationContainer = Wrapper({
	loader: () => import('./navigation/navigation_container')
});

const Home = Wrapper({
	loader: () => import('./home/home')
});

const SignupContainer = Wrapper({
	loader: () => import('./session/signup_container')
});

const LoginContainer = Wrapper({
	loader: () => import('./session/login_container')
});

Loadable.preloadAll();

const App = () => (
	<div id="app">
		<header />
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Redirect to="/" />
		</Switch>
		<footer>
			<Route path="/" component={NavigationContainer} />
		</footer>
	</div>
);

export default App;
