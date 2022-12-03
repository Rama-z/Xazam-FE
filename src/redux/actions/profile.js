import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const profilePending = () => ({
  type: actionStrings.getProfile.concat("_", Pending),
});
const profileRejected = (error) => ({
  type: actionStrings.getProfile.concat("_", Rejected),
  payload: { error },
});
const profileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: actionStrings.editProfile.concat("_", Pending),
});

const editProfileRejected = (error) => ({
  type: actionStrings.editProfile.concat("_", Rejected),
  payload: { error },
});
const editProfileFulfilled = (data) => ({
  type: actionStrings.editProfile.concat("_", Fulfilled),
  payload: { data },
});



const profileAction = {
    
    profilePending,
    profileRejected,
    profileFulfilled,
    editProfilePending,
    editProfileRejected,
    editProfileFulfilled

};

export default profileAction;
