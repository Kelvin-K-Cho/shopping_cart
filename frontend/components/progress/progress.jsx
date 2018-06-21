import React from 'react';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vendor: ['shop', 'listing', 'gateway', 'notification']
		};
	}

	render() {
		console.log(this.props.path);
		console.log(this.state.vendor);

		let place = this.props.path.slice(8);

		for (let i = 0; i < place.length; i++) {
			if (place[i] === '/') {
				place = place.slice(0, i);
			}
		}

		console.log(place);

		let index = this.state.vendor.indexOf(place);

		console.log(index);
		return (
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
	}
}

export default Progress;
