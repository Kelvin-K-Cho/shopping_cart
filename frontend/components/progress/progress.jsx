import React from 'react';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vendor: ['shop', 'listing', 'gateway', 'notification']
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

		if (index === -1) {
			return emptyPortal;
		} else {
			return vendorPortal;
		}
	}
}

export default Progress;
