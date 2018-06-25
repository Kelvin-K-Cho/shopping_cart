import { connect } from 'react-redux';
import Preferences from './preferences';
import { fetchShops } from '../../actions/shops';
import { fetchProfiles } from '../../actions/profiles';
import { selectShops, selectProfiles } from '../../reducers/selectors';

const mapStateToProps = state => ({
	shops: selectShops(state),
	profiles: selectProfiles(state),
	currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
	fetchShops: () => dispatch(fetchShops()),
	fetchProfiles: () => dispatch(fetchProfiles())
});

const PreferencesContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(Preferences);

export default PreferencesContainer;
