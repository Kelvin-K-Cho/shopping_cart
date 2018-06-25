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
				How would you like to be notified of purchase?: &nbsp;
				<input
					type="checkbox"
					value={'e-mail'}
					onChange={this.updateForm('option')}
				/>&nbsp;
				<span>e-mail</span>
				<input
					type="checkbox"
					value={'phone call'}
					onChange={this.updateForm('option')}
				/>&nbsp;
				<span>phone call</span>
			</label>
		);
		let info = (
			<label>
				Contact Information: &nbsp;
				<input
					type="text"
					value={this.state.info}
					onChange={this.updateForm('info')}
				/>
			</label>
		);
		let time = (
			<label>
				What time each day woud you like to be notified of purchases: &nbsp;
				<input
					type="text"
					value={this.state.time}
					onChange={this.updateForm('time')}
				/>
			</label>
		);

		return (
			<div className="main">
				{header}
				<form onSubmit={this.handleSubmit} className="notification-form">
					<div className="notification-box">
						{option}
						{info}
						{time}
					</div>
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(NotificationForm);
