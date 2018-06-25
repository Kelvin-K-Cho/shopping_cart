import { connect } from 'react-redux';
import Sync from './sync';
import { fetchGateways } from '../../actions/gateways';
import { selectGateways } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	gateways: selectGateways(state)
});

const mapDispatchToProps = dispatch => ({
	fetchGateways: () => dispatch(fetchGateways())
});

const SyncContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sync);

export default SyncContainer;
