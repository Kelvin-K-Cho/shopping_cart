import React from 'react';

class Preferences extends React.Component {
	componentDidMount() {
		this.props.fetchShops();
	}

	render() {
		const { shops } = this.props;
		const title = <div className="preferences-title">Preferences</div>;
	}
}

export default Preferences;
