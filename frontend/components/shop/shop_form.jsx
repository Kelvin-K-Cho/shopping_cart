import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ShopForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			category: '',
			state: '',
			city: ''
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.match.params.shopId) {
			this.props.fetchShop(this.props.match.params.shopId);
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.formType !== 'Submit') {
			this.setState(newProps.shop);
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
		// .then(() => this.props.history.push('/vendor/stock'));
	}

	render() {
		let title = <div>Shop Preferences</div>;
		let name = (
			<label>
				Shop Name
				<input
					type="text"
					value={this.state.name}
					onChange={this.updateForm('name')}
				/>
			</label>
		);
		let category = (
			<label>
				Shop Type
				<input
					type="text"
					value={this.state.category}
					onChange={this.updateForm('category')}
				/>
			</label>
		);
		let territory = (
			<label>
				Shop State
				<input
					type="text"
					value={this.state.state}
					onChange={this.updateForm('state')}
				/>
			</label>
		);
		let city = (
			<label>
				Shop City
				<input
					type="text"
					value={this.state.city}
					onChange={this.updateForm('city')}
				/>
			</label>
		);

		return (
			<div className="shop-container">
				{title}
				<form onSubmit={this.handleSubmit} className="shop-form">
					{name}
					{category}
					{territory}
					{city}
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(ShopForm);