import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  data: { id: null, name: null, image: null, relase_date: null, duration: null, synopsis: null, director: null, category: null, cast: null, showtimes: null },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const movieReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { movieDetail } = actionStrings;
  switch (type) {
    case movieDetail.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case movieDetail.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case movieDetail.concat("_", Fulfilled):
      console.log(payload.data.data.id);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        data: {
          id: payload.data.data.id,
          name: payload.data.data.name,
          image: payload.data.data.image,
          duration: payload.data.data.duration,
          relase_date: payload.data.data.relase_date,
          synopsis: payload.data.data.synopsis,
          director: payload.data.data.director,
          category: payload.data.data.category,
          cast: payload.data.data.cast,
          showtimes: payload.data.data.showtimes,
        },
      };

    default:
      return prevState;
  }
};

export default movieReducer;
