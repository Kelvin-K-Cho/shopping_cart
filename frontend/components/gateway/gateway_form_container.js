import { connect } from 'react-redux';
import GatewayForm from './gateway_form';
import {
	fetchGateway,
	createGateway,
	updateGateway
} from '../../actions/gateways';
import { fetchNotifications } from '../../actions/notifications';
import { selectNotifications } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
	let gateway;
	let formType;
	if (ownProps.match.params.gatewayId === 'new') {
		formType = 'Submit';
	} else {
		gateway = state.entities.gateways[ownProps.match.params.gatewayId];
		formType = 'Update';
	}
	return {
		gateway,
		formType,
		notifications: selectNotifications(state)
	};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
	let action;
	if (ownProps.match.params.gatewayId === 'new') {
		action = createGateway;
	} else {
		action = updateGateway;
	}
	return {
		fetchGateway: id => dispatch(fetchGateway(id)),
		action: gateway => dispatch(action(gateway)),
		fetchNotifications: () => dispatch(fetchNotifications())
	};
};

const GatewayFormContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(GatewayForm);

export default GatewayFormContainer;
