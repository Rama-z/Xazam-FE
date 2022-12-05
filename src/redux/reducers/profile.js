import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  profile: {
    firstName: null,
    lastName: null,
    noTelp: null,
    image: null,
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const profileReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProfile, editProfile } = actionStrings;
  switch (type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        profile: {
          firstName: payload.data.data.firstname,
          lastName: payload.data.data.lastname,
          image: payload.data.data.image,
          noTelp: payload.data.data.notelp,
        },
      };

    case editProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProfile.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default profileReducer;
