import { connect } from 'react-redux';
import Profile from './profile';
import {
	fetchProfile,
	createProfile,
	updateProfile
} from '../../actions/profiles';

const mapStateToProps = (state, ownProps) => {
	let profile;
	let formType;
	if (ownProps.match.params.profileId === 'new') {
		formType = 'Submit';
	} else {
		profile = state.entities.profiles[ownProps.match.params.profileId];
		formType = 'Update';
	}
	return {
		profile,
		formType
	};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
	let action;
	if (ownProps.match.params.profileId === 'new') {
		action = createProfile;
	} else {
		action = updateProfile;
	}
	return {
		fetchProfile: id => dispatch(fetchProfile(id)),
		action: profile => dispatch(action(profile))
	};
};

const ProfileContainer = connect(
	mapStateToProps,
	mapDispatchtoProps
)(Profile);

export default ProfileContainer;
