import { connect } from 'react-redux';
import ListingForm from './listing_form';
import {
	fetchListing,
	createListing,
	updateListing
} from '../../actions/listings';

const mapStateToProps = (state, ownProps) => {
	let listing;
	let formType;
	if (ownProps.match.params.listingId === 'new') {
		formType = 'Submit';
	} else {
		listing = state.entities.listings[ownProps.match.params.listingId];
		formType = 'Update';
	}
	return {
		listing,
		formType
	};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
	let action;
	if (ownProps.match.params.listingId === 'new') {
		action = createListing;
	} else {
		action = updateListing;
	}
	return {
		fetchListing: id => dispatch(fetchListing(id)),
		action: listing => dispatch(action(listing))
	};
};

const ListingFormContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(ListingForm);

export default ListingFormContainer;
