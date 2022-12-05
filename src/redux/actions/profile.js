import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "./actionStrings";
import { editprofilesApi, profiles } from "src/modules/api/Auth";
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

const getProfileThunk = (
  token,
  setFirstName,
  setPhoneNum,
  setLastName,
  setImageUser
) => {
  return async (dispatch) => {
    try {
      dispatch(profilePending());
      const result = await profiles(token);
      setFirstName(result.data.data.firstname);
      setPhoneNum(result.data.data.notelp);
      setLastName(result.data.data.lastname);
      setImageUser(result.data.data.image);
      dispatch(profileFulfilled(result.data));
    } catch (error) {
      dispatch(profileRejected(error));
    }
  };
};

const editProfileThunk = (data, token, formState) => {
  return async (dispatch) => {
    try {
      dispatch(editProfilePending());
      const result = await editprofilesApi(data, token);
      console.log(result.data);
      dispatch(editProfileFulfilled(result.data));
    } catch (error) {
      dispatch(editProfileRejected(error));
    }
  };
};

const profileAction = {
  getProfileThunk,
  editProfileThunk,
};

export default profileAction;
