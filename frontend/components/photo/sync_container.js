import { connect } from 'react-redux';
import Sync from './sync';
import { fetchProfiles } from '../../actions/profiles';
import { selectProfiles } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	profiles: selectProfiles(state)
});

const mapDispatchToProps = dispatch => ({
	fetchProfiles: () => dispatch(fetchProfiles())
});

const SyncContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sync);

export default SyncContainer;
