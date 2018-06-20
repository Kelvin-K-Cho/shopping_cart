import { connect } from 'react-redux';
import ShopForm from './shop_form';
import { fetchShop, createShop, updateShop } from '../../actions/shops';
import { fetchListings } from '../../actions/listings';
import { selectListings } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
	let shop;
	let formType;
	if (ownProps.match.params.shopId === 'new') {
		formType = 'Submit';
	} else {
		shop = state.entities.shops[ownProps.match.params.shopId];
		formType = 'Update';
	}
	return {
		shop,
		formType,
		listings: selectListings(state)
	};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
	let action;
	if (ownProps.match.params.shopId === 'new') {
		action = createShop;
	} else {
		action = updateShop;
	}
	return {
		fetchShop: id => dispatch(fetchShop(id)),
		action: shop => dispatch(action(shop)),
		fetchListings: () => dispatch(fetchListings())
	};
};

const ShopFormContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(ShopForm);

export default ShopFormContainer;
