import { connect } from 'react-redux';
import NotificationForm from './notification_form';
import {
	fetchNotification,
	createNotification,
	updateNotification
} from '../../actions/notifications';

const mapStateToProps = (state, ownProps) => {
	let notification;
	let formType;
	if (ownProps.match.params.notificationId === 'new') {
		formType = 'Submit';
	} else {
		notification =
			state.entities.notifications[ownProps.match.params.notificationId];
		formType = 'Update';
	}
	return {
		notification,
		formType
	};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
	let action;
	if (ownProps.match.params.notificationId === 'new') {
		action = createNotification;
	} else {
		action = updateNotification;
	}
	return {
		fetchNotification: id => dispatch(fetchNotification(id)),
		action: notification => dispatch(action(notification))
	};
};

const NotificationFormContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(NotificationForm);

export default NotificationFormContainer;
