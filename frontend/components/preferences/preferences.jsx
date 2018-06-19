import React from 'react';
import { Link } from 'react-router-dom';

class Preferences extends React.Component {
	componentDidMount() {
		this.props.fetchShops();
	}

	render() {
		const { shops } = this.props;
		console.log(this.props);
		let shop;
		const title = <div className="preferences-title">Choose Your Portal</div>;
		let vendor;
		vendor = <Link to="vendor/shop">Vendor</Link>;
		return (
			<div>
				{title}
				{vendor}
			</div>
		);
	}
}

export default Preferences;
