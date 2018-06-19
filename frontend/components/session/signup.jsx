import React from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	handleInput(type) {
		return event => {
			this.setState({
				[type]: event.target.value
			});
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props
			.createNewUser(this.state)
			.then(() => this.props.history.push(`/preferences`));
	}

	handleDemo(event) {
		event.preventDefault();
		const demo = { username: 'demo', password: 'secret' };
		this.props.login(demo).then(() => this.props.history.push('/preferences'));
	}

	render() {
		return (
			<div className="main">
				<h2>Welcome Vendor!</h2>
				<div className="form-container" id="signup-container">
					<Form>
						<FormGroup>
							Username: &nbsp;
							<Label>
								<Input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleInput('username')}
								/>
							</Label>
						</FormGroup>
						<FormGroup>
							Password: &nbsp;
							<Label>
								<Input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleInput('password')}
								/>
							</Label>
						</FormGroup>
						<div className="form-buttons" id="signup-buttons">
							<Button onClick={this.handleSubmit}>Sign Up</Button>
							<Button onClick={this.handleDemo}>Demo User</Button>
						</div>
					</Form>
					<div>
						Already have an account? &nbsp;
						<NavLink href="#/login">Log In</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Signup);
