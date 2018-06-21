const fetchGateways = () =>
	$.ajax({
		method: 'GET',
		url: `api/gateways`
	});

const fetchGateway = id =>
	$.ajax({
		method: 'GET',
		url: `api/gateways/${id}`
	});

const createGateway = gateway =>
	$.ajax({
		method: 'POST',
		url: `api/gateways`,
		data: { gateway }
	});

const updateGateway = gateway =>
	$.ajax({
		method: 'PUT',
		url: `api/gateways/${gateway.id}`,
		data: { gateway }
	});

const destroyGateway = gateway =>
	$.ajax({
		method: 'DELETE',
		url: `api/gateways/${gateway.id}`
	});

export {
	fetchGateways,
	fetchGateway,
	createGateway,
	updateGateway,
	destroyGateway
};
