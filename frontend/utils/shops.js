const fetchShops = () =>
	$.ajax({
		method: 'GET',
		url: `api/shops`
	});

const fetchShop = id =>
	$.ajax({
		method: 'GET',
		url: `api/shops/${id}`
	});

const createShop = shop =>
	$.ajax({
		method: 'POST',
		url: `api/shops`,
		data: { shop }
	});

const updateShop = shop =>
	$.ajax({
		method: 'PUT',
		url: `api/shops/${shop.id}`,
		data: { shop }
	});

const destroyShop = shop =>
	$.ajax({
		method: 'DELETE',
		url: `api/shops/${shop.id}`
	});

export { fetchShops, fetchShop, createShop, updateShop, destroyShop };
