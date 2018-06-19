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

class Login extends React.Component {
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
			this.setState({ [type]: event.target.value });
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props
			.login(this.state)
			.then(() => this.props.history.push('/preferences'));
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
				<div className="form-container" id="login-container">
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
						<div className="form-buttons" id="login-buttons">
							<Button onClick={this.handleSubmit}>Log In</Button>
							<Button onClick={this.handleDemo}>Demo User</Button>
						</div>
					</Form>
					<div>
						Don't have an account? &nbsp;
						<NavLink href="#/signup">Sign Up</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
