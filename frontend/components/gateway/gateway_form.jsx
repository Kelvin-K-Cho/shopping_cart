import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class GatewayForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			full_name: '',
			account_type: '',
			routing_number: '',
			first_name: '',
			last_name: '',
			birthdate: '',
			ssn: '',
			address: '',
			city: '',
			state: '',
			postal_code: ''
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (
			this.props.match.params.gatewayId &&
			this.props.match.params.gatewayId !== 'new'
		) {
			this.props.fetchGateway(this.props.match.params.gatewayId);
		}
		this.props.fetchNotifications();
	}

	componentWillReceiveProps(newProps) {
		if (newProps.formType !== 'Submit') {
			this.setState(newProps.gateway);
		}
	}

	updateForm(field) {
		return event => {
			this.setState({ [field]: event.target.value });
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		const { notifications } = this.props;
		let notificationId;
		for (let i = 0; i < notifications.length; i++) {
			if (notifications[i].user_id === currentUser.id) {
				notificationId = notifications[i].id;
				break;
			}
		}
		if (notificationId) {
			this.props
				.action(this.state)
				.then(() =>
					this.props.history.push(`/vendor/notification/${notificationId}`)
				);
		} else {
			this.props
				.action(this.state)
				.then(() => this.props.history.push(`/vendor/notification/new`));
		}
		// this.props
		// 	.action(this.state)
		// 	.then(() => this.props.history.push('/preferences/'));
	}

	render() {
		let header = <h1>Gateway Payment</h1>;
		let location = (
			<label>
				Bank Location:
				<input
					type="text"
					value={this.state.location}
					onChange={this.updateForm('location')}
				/>
			</label>
		);
		let full_name = (
			<label>
				Full Name on Account:
				<input
					type="text"
					value={this.state.full_name}
					onChange={this.updateForm('full_name')}
				/>
			</label>
		);
		let account_type = (
			<label>
				Account Type
				<input
					type="text"
					value={this.state.account_type}
					onChange={this.updateForm('account_type')}
				/>
			</label>
		);
		let routing_number = (
			<label>
				Routing Number
				<input
					type="text"
					value={this.state.routing_number}
					onChange={this.updateForm('routing_number')}
				/>
			</label>
		);
		let first_name = (
			<label>
				First Name:
				<input
					type="text"
					value={this.state.first_name}
					onChange={this.updateForm('first_name')}
				/>
			</label>
		);
		let last_name = (
			<label>
				Last Name:
				<input
					type="text"
					value={this.state.last_name}
					onChange={this.updateForm('last_name')}
				/>
			</label>
		);
		let birthdate = (
			<label>
				DOB:
				<input
					type="text"
					value={this.state.birthdate}
					onChange={this.updateForm('birthdate')}
				/>
			</label>
		);
		let ssn = (
			<label>
				Last 4 of SSN:
				<input
					type="text"
					value={this.state.ssn}
					onChange={this.updateForm('ssn')}
				/>
			</label>
		);
		let address = (
			<label>
				Address:
				<input
					type="text"
					value={this.state.address}
					onChange={this.updateForm('address')}
				/>
			</label>
		);
		let city = (
			<label>
				City:
				<input
					type="text"
					value={this.state.city}
					onChange={this.updateForm('city')}
				/>
			</label>
		);
		let territory = (
			<label>
				State:
				<input
					type="text"
					value={this.state.state}
					onChange={this.updateForm('state')}
				/>
			</label>
		);
		let postal_code = (
			<label>
				Zip/Postal Code:
				<input
					type="text"
					value={this.state.postal_code}
					onChange={this.updateForm('postal_code')}
				/>
			</label>
		);
		return (
			<div className="gateway-container">
				{header}
				<form onSubmit={this.handleSubmit} className="gateway-form">
					{location}
					{full_name}
					{account_type}
					{routing_number}
					{first_name}
					{last_name}
					{birthdate}
					{ssn}
					{address}
					{city}
					{territory}
					{postal_code}
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(GatewayForm);
