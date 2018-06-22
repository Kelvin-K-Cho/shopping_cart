import { connect } from 'react-redux';
import Preferences from './preferences';
import { fetchShops } from '../../actions/shops';
import { fetchGateways } from '../../actions/gateways';
import { selectShops, selectGateways } from '../../reducers/selectors';

const mapStateToProps = state => ({
	shops: selectShops(state),
	gateways: selectGateways(state),
	currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
	fetchShops: () => dispatch(fetchShops()),
	fetchGateways: () => dispatch(fetchGateways())
});

const PreferencesContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(Preferences);

export default PreferencesContainer;
