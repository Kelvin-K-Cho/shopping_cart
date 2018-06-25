import React from 'react';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vendor: ['shop', 'listing', 'gateway', 'notification'],
			customer: ['profile', 'photos', 'payment']
		};
	}

	render() {
		let place = this.props.path.slice(8);

		for (let i = 0; i < place.length; i++) {
			if (place[i] === '/') {
				place = place.slice(0, i);
			}
		}

		let index = this.state.vendor.indexOf(place);

		let position = this.props.path.slice(10);

		for (let i = 0; i < position.length; i++) {
			if (position[i] === '/') {
				position = position.slice(0, i);
			}
		}

		let element = this.state.customer.indexOf(position);

		let emptyPortal = <div />;
		let vendorPortal = (
			<div className="checkout-wrap">
				<ul className="checkout-bar">
					<li className={index === 0 ? 'active' : index > 0 ? 'visited' : ''}>
						Shop Preferences
					</li>

					<li className={index === 1 ? 'active' : index > 1 ? 'visited' : ''}>
						Stock your shop
					</li>

					<li className={index === 2 ? 'active' : index > 2 ? 'visited' : ''}>
						Payment to you
					</li>

					<li className={index === 3 ? 'active2' : ''}>
						Notification Preferences
					</li>
				</ul>
			</div>
		);

		let customerPortal = (
			<div className="checkout-wrap">
				<ul className="checkout-bar" id="customer">
					<li
						className={element === 0 ? 'active' : element > 0 ? 'visited' : ''}
					>
						Your Profile
					</li>

					<li
						className={element === 1 ? 'active' : element > 1 ? 'visited' : ''}
					>
						Your Photos
					</li>

					<li className={element === 2 ? 'active3' : ''}>Billing/Payment</li>
				</ul>
			</div>
		);

		if (index > -1) {
			return vendorPortal;
		} else if (element > -1) {
			return customerPortal;
		} else {
			return emptyPortal;
		}
	}
}

export default Progress;
