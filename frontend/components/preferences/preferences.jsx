import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

class Preferences extends React.Component {
	componentDidMount() {
		this.props.fetchShops();
	}

	render() {
		const { shops } = this.props;
		let shopId;
		for (let i = 0; i < shops.length; i++) {
			if (shops[i].user_id === currentUser.id) {
				shopId = shops[i].id;
				break;
			}
		}
		const title = <div className="preferences-title">Choose Your Portal</div>;
		let vendor;
		if (shopId) {
			vendor = <Link to={`/vendor/shop/${shopId}`}>Vendor</Link>;
		} else {
			vendor = <Link to="/vendor/shop/new">Vendor</Link>;
		}
		return (
			<div className="main">
				{title}
				{vendor}
			</div>
		);
	}
}

export default Preferences;
