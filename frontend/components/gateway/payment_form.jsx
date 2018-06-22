import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class PaymentForm extends React.Component {
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
			this.props.match.params.paymentId &&
			this.props.match.params.paymentId !== 'new'
		) {
			this.props.fetchGateway(this.props.match.params.paymentId);
		}
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
		this.props
			.action(this.state)
			.then(() => this.props.history.push('/customer/photos/'));
		// const { notifications } = this.props;
		// let notificationId;
		// for (let i = 0; i < notifications.length; i++) {
		// 	if (notifications[i].user_id === currentUser.id) {
		// 		notificationId = notifications[i].id;
		// 		break;
		// 	}
		// }
		// if (notificationId) {
		// 	this.props
		// 		.action(this.state)
		// 		.then(() =>
		// 			this.props.history.push(`/vendor/notification/${notificationId}`)
		// 		);
		// } else {
		// 	this.props
		// 		.action(this.state)
		// 		.then(() => this.props.history.push(`/vendor/notification/new`));
		// }
		// this.props
		// 	.action(this.state)
		// 	.then(() => this.props.history.push('/preferences/'));
	}

	render() {
		let header = <h1>Gateway Payment</h1>;
		let location = (
			<label>
				Bank Location:&nbsp;
				<input
					type="text"
					value={this.state.location}
					onChange={this.updateForm('location')}
				/>
			</label>
		);
		let full_name = (
			<label>
				Full Name on Account:&nbsp;
				<input
					type="text"
					value={this.state.full_name}
					onChange={this.updateForm('full_name')}
				/>
			</label>
		);
		let account_type = (
			<label>
				Account Type:&nbsp;
				<input
					type="text"
					value={this.state.account_type}
					onChange={this.updateForm('account_type')}
				/>
			</label>
		);
		let routing_number = (
			<label>
				Routing Number:&nbsp;
				<input
					type="text"
					value={this.state.routing_number}
					onChange={this.updateForm('routing_number')}
				/>
			</label>
		);
		let first_name = (
			<label>
				First Name:&nbsp;
				<input
					type="text"
					value={this.state.first_name}
					onChange={this.updateForm('first_name')}
				/>
			</label>
		);
		let last_name = (
			<label>
				Last Name:&nbsp;
				<input
					type="text"
					value={this.state.last_name}
					onChange={this.updateForm('last_name')}
				/>
			</label>
		);
		let birthdate = (
			<label>
				DOB:&nbsp;
				<input
					type="text"
					value={this.state.birthdate}
					onChange={this.updateForm('birthdate')}
				/>
			</label>
		);
		let ssn = (
			<label>
				Last 4 of SSN:&nbsp;
				<input
					type="text"
					value={this.state.ssn}
					onChange={this.updateForm('ssn')}
				/>
			</label>
		);
		let address = (
			<label>
				Address:&nbsp;
				<input
					type="text"
					value={this.state.address}
					onChange={this.updateForm('address')}
				/>
			</label>
		);
		let city = (
			<label>
				City:&nbsp;
				<input
					type="text"
					value={this.state.city}
					onChange={this.updateForm('city')}
				/>
			</label>
		);
		let territory = (
			<label>
				State:&nbsp;
				<input
					type="text"
					value={this.state.state}
					onChange={this.updateForm('state')}
				/>
			</label>
		);
		let postal_code = (
			<label>
				Zip/Postal Code:&nbsp;
				<input
					type="text"
					value={this.state.postal_code}
					onChange={this.updateForm('postal_code')}
				/>
			</label>
		);
		return (
			<div className="main">
				{header}
				<form onSubmit={this.handleSubmit} className="gateway-form">
					<div className="gateway-box">
						<div className="flexform">
							{location}
							{full_name}
							{account_type}
							{routing_number}
						</div>
						<div className="flexform">
							{first_name}
							{last_name}
							{birthdate}
							{ssn}
							{address}
							{city}
							{territory}
							{postal_code}
						</div>
					</div>
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(PaymentForm);
