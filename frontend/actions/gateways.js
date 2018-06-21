import * as GatewayAPIUtil from '../utils/gateways';

const RECEIVE_ALL_GATEWAYS = 'RECEIVE_ALL_GATEWAYS';
const RECEIVE_GATEWAY = 'RECEIVE_GATEWAY';
const REMOVE_GATEWAY = 'REMOVE_GATEWAY';

const receiveAllGateways = gateways => ({
	type: RECEIVE_ALL_GATEWAYS,
	gateways
});

const receiveGateway = gateway => ({
	type: RECEIVE_GATEWAY,
	gateway
});

const removeGateway = gateway => ({
	type: REMOVE_GATEWAY,
	gateway
});

const fetchGateways = () => dispatch =>
	GatewayAPIUtil.fetchGateways().then(payload => {
		dispatch(receiveAllGateways(payload));
	});

const fetchGateway = id => dispatch =>
	GatewayAPIUtil.fetchGateway(id).then(payload => {
		dispatch(receiveGateway(payload[id]));
	});

const createGateway = gateway => dispatch =>
	GatewayAPIUtil.createGateway(gateway).then(payload => {
		dispatch(receiveGateway(payload));
	});

const updateGateway = gateway => dispatch =>
	GatewayAPIUtil.updateGateway(gateway).then(payload => {
		dispatch(receiveGateway(payload));
	});

const deleteGateway = gateway => dispatch =>
	GatewayAPIUtil.destroyGateway(gateway).then(payload => {
		dispatch(removeGateway(payload));
	});

export {
	RECEIVE_ALL_GATEWAYS,
	RECEIVE_GATEWAY,
	REMOVE_GATEWAY,
	fetchGateways,
	fetchGateway,
	createGateway,
	updateGateway,
	deleteGateway
};
