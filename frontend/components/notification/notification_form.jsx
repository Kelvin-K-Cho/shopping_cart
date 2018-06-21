import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NotificationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			option: '',
			info: '',
			time: ''
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (
			this.props.match.params.notificationId &&
			this.props.match.params.notificationId !== 'new'
		) {
			this.props.fetchNotification(this.props.match.params.notificationId);
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.formType !== 'Submit') {
			this.setState(newProps.notification);
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
			.then(() => this.props.history.push('/preferences/'));
	}

	render() {
		let header = <h1>Notification Preferences</h1>;
		let option = (
			<label>
				How would you like to be notified of purchase?
				<input
					type="text"
					value={this.state.option}
					onChange={this.updateForm('option')}
				/>
			</label>
		);
		let info = (
			<label>
				Contact Information
				<input
					type="text"
					value={this.state.info}
					onChange={this.updateForm('info')}
				/>
			</label>
		);
		let time = (
			<label>
				What time each day woud you like to be notified of purchases
				<input
					type="text"
					value={this.state.info}
					onChange={this.updateForm('time')}
				/>
			</label>
		);

		return (
			<div className="notification-container">
				{header}
				<form onSubmit={this.handleSubmit} className="notification-form">
					{option}
					{info}
					{time}
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(NotificationForm);
