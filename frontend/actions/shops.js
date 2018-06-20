import * as ShopAPIUtil from '../utils/shops';

const RECEIVE_ALL_SHOPS = 'RECEIVE_ALL_SHOPS';
const RECEIVE_SHOP = 'RECEIVE_SHOP';
const REMOVE_SHOP = 'REMOVE_SHOP';

const receiveAllShops = shops => ({
	type: RECEIVE_ALL_SHOPS,
	shops
});

const receiveShop = shop => ({
	type: RECEIVE_SHOP,
	shop
});

const removeShop = shop => ({
	type: REMOVE_SHOP,
	shop
});

const fetchShops = () => dispatch =>
	ShopAPIUtil.fetchShops().then(payload => {
		dispatch(receiveAllShops(payload));
	});

const fetchShop = id => dispatch =>
	ShopAPIUtil.fetchShop(id).then(payload => {
		dispatch(receiveShop(payload[id]));
	});

const createShop = shop => dispatch =>
	ShopAPIUtil.createShop(shop).then(payload => {
		dispatch(receiveShop(payload));
	});

const updateShop = shop => dispatch =>
	ShopAPIUtil.updateShop(shop).then(payload => {
		dispatch(receiveShop(payload));
	});

const deleteShop = shop => dispatch =>
	ShopAPIUtil.destroyShop(shop).then(payload => {
		dispatch(removeShop(payload));
	});

export {
	RECEIVE_ALL_SHOPS,
	RECEIVE_SHOP,
	REMOVE_SHOP,
	fetchShops,
	fetchShop,
	createShop,
	updateShop,
	deleteShop
};
