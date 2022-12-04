import { ActionType } from "redux-promise-middleware";
import { actionMovies } from "../actions/actionStrings";

const initialState = {
  movies: [],
  movieDetail: {
    id: null,
    name: null,
    image: [],
    relase_data: null,
    duration: null,
    synopsis: null,
    director: null,
    category: [],
    cast: [],
    shotimes: [],
  },
  showTimes: {
    nowShowing: [],
    upComing: [],
  },
  showTime: [],
  createMovie: [],
  deleteMovie: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  consfirms: false,
};

const movieReduser = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {
    movieAll,
    movieDetail,
    showTimes,
    showTime,
    movieCreate,
    movieDelete,
  } = actionMovies;
  switch (type) {
    // TODO: movie all
    case movieAll.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case movieAll.concat("-", Rejected):
      return {
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case movieAll.concat("-", Fulfilled):
      return {
        isLoading: false,
        isError: false,
        isFulfilled: true,
        movies: payload.data.data,
      };

    // TODO: Movie detail
    case movieDetail.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case movieDetail.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case movieDetail.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        movieDetail: payload.data.data,
      };

    // TODO: Shows time
    case showTimes.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case showTimes.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case showTimes.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        showTimes: payload.data.data,
      };

    // TODO: Show time
    case showTime.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case showTime.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case showTime.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        showTime: payload.data.data,
      };

    // TODO: Movie Create
    case movieCreate.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case movieCreate.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case movieCreate.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        createMovie: payload.data.data,
      };

    // TODO: Movie Delete
    case movieDelete.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case movieDelete.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case movieDelete.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        deleteMovie: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default movieReduser;
