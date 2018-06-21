import { connect } from 'react-redux';
import Progress from './progress';

const mapStateToProps = (state, ownProps) => ({
	path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({});

const ProgressContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Progress);

export default ProgressContainer;
