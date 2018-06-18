import { connect } from 'react-redux';
import Navigation from './navigation';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

const NavigationContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation);

export default NavigationContainer;
