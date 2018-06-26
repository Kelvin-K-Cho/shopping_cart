import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

class Sync extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			facebook: false,
			instagram: false,
			icloud: false,
			computer: false
		};
		this.handleFacebook = this.handleChange.bind(this, 'facebook');
		this.handleInstagram = this.handleChange.bind(this, 'instagram');
		this.handleIcloud = this.handleChange.bind(this, 'icloud');
		this.handleComputer = this.handleChange.bind(this, 'computer');
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchGateways();
	}

	handleChange(key, event) {
		this.setState({ [key]: event.target.checked });
	}

	handleSubmit(event) {
		event.preventDefault();
		const { gateways } = this.props;
		let gatewayId;
		for (let i = 0; i < gateways.length; i++) {
			if (gateways[i].user_id === currentUser.id) {
				gatewayId = gateways[i].id;
				break;
			}
		}
		if (gatewayId) {
			this.props.history.push(`/customer/payment/${gatewayId}`);
		} else {
			this.props.history.push(`/customer/payment/new`);
		}
	}

	render() {
		let header = <h1>Your Photos</h1>;
		let facebook = (
			<div className="facebook">
				<div className="labels" id="facebook-label">
					Facebook
				</div>
				<input type="file" onChange={this.handleFacebook} />
			</div>
		);
		// <Toggle
		// 	id="facebook-toggle"
		// 	defaultChecked={this.state.facebook}
		// 	onChange={this.handleFacebook}
		// />
		let instagram = (
			<div className="instagram">
				<div className="labels">Instagram</div>
				<input type="file" onChange={this.handleInstagram} />
			</div>
		);
		// <Toggle
		// 	id="instagram-toggle"
		// 	defaultChecked={this.state.instagram}
		// 	onChange={this.handleInstagram}
		// />
		let icloud = (
			<div className="icloud">
				<div className="labels">iCloud</div>
				<input type="file" onChange={this.handleIcloud} />
			</div>
		);
		// <Toggle
		// 	id="icloud-toggle"
		// 	defaultChecked={this.state.icloud}
		// 	onChange={this.handleIcloud}
		// />
		let computer = (
			<div className="computer">
				<div className="labels">Computer</div>
				<input type="file" onChange={this.handleComputer} />
			</div>
		);
		// <Toggle
		// 	id="computer-toggle"
		// 	defaultChecked={this.state.computer}
		// 	onChange={this.handleComputer}
		// />
		let manage = (
			<label>
				<div>Manage</div> <textarea />
			</label>
		);
		return (
			<div className="main">
				{header}
				<form onSubmit={this.handleSubmit} className="sync-form">
					<div className="sync-box">
						<div className="flexform">
							{facebook}
							{instagram}
							{icloud}
							{computer}
						</div>
						<div className="flexform">{manage}</div>
					</div>
					<input type="submit" value="Save and Continue" />
				</form>
			</div>
		);
	}
}

export default Sync;
