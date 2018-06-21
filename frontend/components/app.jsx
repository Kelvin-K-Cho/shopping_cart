import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Wrapper from './loader/wrapper';
import Loadable from 'react-loadable';
import NavigationContainer from './navigation/navigation_container';
import ProgressContainer from './progress/progress_container';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PreferencesContainer from './preferences/preferences_container';
import ShopFormContainer from './shop/shop_form_container';
import ListingFormContainer from './listing/listing_form_container';
import GatewayFormContainer from './gateway/gateway_form_container';
import NotificationFormContainer from './notification/notification_form_container';

// const NavigationContainer = Wrapper({
// 	loader: () => import('./navigation/navigation_container')
// });
//
// const ProgressContainer = Wrapper({
// 	loader: () => import('./progress/progress_container')
// });
//
// const Home = Wrapper({
// 	loader: () => import('./home/home')
// });
//
// const SignupContainer = Wrapper({
// 	loader: () => import('./session/signup_container')
// });
//
// const LoginContainer = Wrapper({
// 	loader: () => import('./session/login_container')
// });
//
// const PreferencesContainer = Wrapper({
// 	loader: () => import('./preferences/preferences_container')
// });
//
// const ShopFormContainer = Wrapper({
// 	loader: () => import('./shop/shop_form_container')
// });
//
// const ListingFormContainer = Wrapper({
// 	loader: () => import('./listing/listing_form_container')
// });
//
// const GatewayFormContainer = Wrapper({
// 	loader: () => import('./gateway/gateway_form_container')
// });
//
// const NotificationFormContainer = Wrapper({
// 	loader: () => import('./notification/notification_form_container')
// });
//
// Loadable.preloadAll();

const App = () => (
	<div id="app">
		<header>
			<Route path="/" component={ProgressContainer} />
		</header>
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<ProtectedRoute
				exact
				path="/preferences"
				component={PreferencesContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/shop/:shopId"
				component={ShopFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/shop/new"
				component={ShopFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/listing/:listingId"
				component={ListingFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/listing/new"
				component={ListingFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/gateway/:gatewayId"
				component={GatewayFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/gateway/new"
				component={GatewayFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/notification/:notificationId"
				component={NotificationFormContainer}
			/>
			<ProtectedRoute
				exact
				path="/vendor/notification/new"
				component={NotificationFormContainer}
			/>
			<Redirect to="/" />
		</Switch>
		<footer>
			<Route path="/" component={NavigationContainer} />
		</footer>
	</div>
);

export default App;
