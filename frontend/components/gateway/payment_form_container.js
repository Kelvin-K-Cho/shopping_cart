import { connect } from 'react-redux';
import PaymentForm from './payment_form';
import {
	fetchGateway,
	createGateway,
	updateGateway
} from '../../actions/gateways';

const mapStateToProps = (state, ownProps) => {
	let gateway;
	let formType;
	if (ownProps.match.params.paymentId === 'new') {
		formType = 'Submit';
	} else {
		gateway = state.entities.gateways[ownProps.match.params.paymentId];
		formType = 'Update';
	}
	return {
		gateway,
		formType
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
		action: gateway => dispatch(action(gateway))
	};
};

const PaymentFormContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(PaymentForm);

export default PaymentFormContainer;
