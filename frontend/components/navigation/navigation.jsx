import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavLink,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button
} from 'reactstrap';

class Navigation extends React.Component {
	render() {
		const { currentUser, path, logout } = this.props;

		let login = (
			<NavLink href="#/login">
				<Button outline size="sm">
					Log In
				</Button>
			</NavLink>
		);
		let signup = (
			<NavLink href="#/signup">
				<Button outline size="sm">
					Sign Up
				</Button>
			</NavLink>
		);
		let link;

		if (currentUser) {
			link = (
				<NavLink href="#/">
					<Button outline size="sm" onClick={logout}>
						Logout
					</Button>
				</NavLink>
			);
		} else {
			if (path === '/signup') {
				link = login;
			} else if (path === '/login') {
				link = signup;
			} else {
				link = (
					<div className="nav-container" id="right-nav-container">
						{login}
						{signup}
					</div>
				);
			}
		}
		let display = <Navbar>{link}</Navbar>;
		return display;
	}
}

export default Navigation;
