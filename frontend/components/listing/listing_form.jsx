import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: '',
			description: '',
			tags: '',
			price: 0.0,
			shipping: 0.0,
			time: '',
			weight: '',
			length: '',
			width: '',
			height: ''
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (
			this.props.match.params.listingId &&
			this.props.match.params.listingId !== 'new'
		) {
			this.props.fetchListing(this.props.match.params.listingId);
		}
		this.props.fetchGateways();
	}

	componentWillReceiveProps(newProps) {
		if (newProps.formType !== 'Submit') {
			this.setState(newProps.listing);
		}
	}

	updateForm(field) {
		return event => {
			this.setState({ [field]: event.target.value });
		};
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
			this.props
				.action(this.state)
				.then(() => this.props.history.push(`/vendor/gateway/${gatewayId}`));
		} else {
			this.props
				.action(this.state)
				.then(() => this.props.history.push(`/vendor/gateway/new`));
		}
		// this.props
		// 	.action(this.state)
		// 	.then(() => this.props.history.push('/preferences/'));
	}

	render() {
		let header = <h1>Stock your shop</h1>;
		let information = (
			<section>
				Add as many listings as you'd like! Only the first 4 will appear on our
				platform.
			</section>
		);
		let details = <div>Details</div>;
		let title = (
			<label>
				Title:&nbsp;
				<input
					type="text"
					value={this.state.title}
					onChange={this.updateForm('title')}
				/>
			</label>
		);
		let category = (
			<label>
				Category:&nbsp;
				<input
					type="text"
					value={this.state.category}
					onChange={this.updateForm('category')}
				/>
			</label>
		);
		let description = (
			<label>
				Description:&nbsp;
				<textarea
					type="text"
					value={this.state.description}
					onChange={this.updateForm('description')}
				/>
			</label>
		);
		let tags = (
			<label>
				Tags:&nbsp;
				<input
					type="text"
					value={this.state.tags}
					onChange={this.updateForm('tags')}
				/>
			</label>
		);
		let price = (
			<label>
				Price:&nbsp; $
				<input
					type="number"
					value={this.state.price}
					onChange={this.updateForm('price')}
				/>
			</label>
		);
		let shipping = (
			<label>
				Shipping Cost:&nbsp; $
				<input
					type="number"
					value={this.state.shipping}
					onChange={this.updateForm('shipping')}
				/>
			</label>
		);
		let time = (
			<label>
				Processing Time:&nbsp;
				<input
					type="text"
					value={this.state.time}
					onChange={this.updateForm('time')}
				/>
			</label>
		);
		let weight = (
			<label>
				Item Weight:&nbsp;
				<input
					type="text"
					value={this.state.weight}
					onChange={this.updateForm('weight')}
				/>
			</label>
		);
		let size = <div>Item Size: (when packed)</div>;
		let length = (
			<label>
				<input
					type="text"
					value={this.state.length}
					onChange={this.updateForm('length')}
				/>&nbsp;length
			</label>
		);
		let width = (
			<label>
				<input
					type="text"
					value={this.state.width}
					onChange={this.updateForm('width')}
				/>&nbsp;width
			</label>
		);
		let height = (
			<label>
				<input
					type="text"
					value={this.state.height}
					onChange={this.updateForm('height')}
				/>&nbsp;height
			</label>
		);

		return (
			<div className="main">
				{header}
				{information}
				<form onSubmit={this.handleSubmit} className="listing-form">
					<div className="listing-box">
						<div className="flexform">
							<h4>Details</h4>
							{title}
							{category}
							{description}
							{tags}
						</div>
						<div className="flexform">
							<h4>Pricing:</h4>
							{price}
						</div>
						<div className="flexform">
							{shipping}
							{time}
							{weight}
							{size}
							{length}
							{width}
							{height}
						</div>
					</div>
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(ListingForm);
