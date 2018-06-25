import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

class Preferences extends React.Component {
	componentDidMount() {
		this.props.fetchShops().then(() => this.props.fetchProfiles());
	}

	render() {
		const { shops, profiles, currentUser } = this.props;
		let shopId;
		for (let i = 0; i < shops.length; i++) {
			if (shops[i].user_id === currentUser.id) {
				shopId = shops[i].id;
				break;
			}
		}
		let profileId;
		if (profiles) {
			for (let i = 0; i < profiles.length; i++) {
				if (profiles[i].user_id === currentUser.id) {
					profileId = profiles[i].id;
					break;
				}
			}
		}
		const title = <div className="preferences-title">Choose Your Portal</div>;
		let vendor;
		if (shopId) {
			vendor = <Link to={`/vendor/shop/${shopId}`}>Vendor</Link>;
		} else {
			vendor = <Link to="/vendor/shop/new">Vendor</Link>;
		}
		let customer;
		if (profileId) {
			customer = <Link to={`/customer/profile/${profileId}`}>Customer</Link>;
		} else {
			customer = <Link to="/customer/profile/new">Customer</Link>;
		}
		return (
			<div className="main">
				{title}
				{vendor}
				{customer}
			</div>
		);
	}
}

export default Preferences;
