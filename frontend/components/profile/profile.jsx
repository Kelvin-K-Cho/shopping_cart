import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Calendar from 'react-calendar/dist/entry.nostyle';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			full_name: '',
			state: '',
			city: '',
			dob: '',
			twenty_one: '',
			date: new Date()
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		if (
			this.props.match.params.profileId &&
			this.props.match.params.profileId !== 'new'
		) {
			this.props.fetchProfile(this.props.match.params.profileId);
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.formType !== 'Submit') {
			this.setState(newProps.profile);
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
	}

	onChange(date) {
		this.setState({ date });
	}

	render() {
		let header = <h1>Your Profile</h1>;
		let username = (
			<label>
				Username: &nbsp;
				<input
					type="text"
					value={this.state.username}
					onChange={this.updateForm('username')}
				/>
			</label>
		);
		let full_name = (
			<label>
				Full Name: &nbsp;
				<input
					type="text"
					value={this.state.full_name}
					onChange={this.updateForm('full_name')}
				/>
			</label>
		);

		let territory = (
			<label>
				State: &nbsp;
				<input
					type="text"
					value={this.state.state}
					onChange={this.updateForm('state')}
				/>
			</label>
		);
		let city = (
			<label>
				City: &nbsp;
				<input
					type="text"
					value={this.state.city}
					onChange={this.updateForm('city')}
				/>
			</label>
		);

		return (
			<div className="main">
				{header}
				<form onSubmit={this.handleSubmit} className="profile-form">
					<div className="profile-box">
						<div className="flexform">
							{username}
							{full_name}
							{territory}
							{city}
						</div>
						<div>
							<div>DOB:</div>
							<Calendar onChange={this.onChange} value={this.state.date} />
						</div>
					</div>
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(Profile);
