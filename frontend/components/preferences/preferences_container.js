import { connect } from 'react-redux';
import Preferences from './preferences';
import { fetchShops } from '../../actions/shops';
import { selectShops } from '../../reducers/selectors';

const mapStateToProps = state => ({
	shops: selectShops(state)
});

const mapDispatchtoProps = dispatch => ({
	fetchShops: () => dispatch(fetchShops())
});

const PreferencesContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(Preferences);

export default PreferencesContainer;
