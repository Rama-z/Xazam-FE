import { ActionType } from "redux-promise-middleware";
import {
  movies,
  moviedetail,
  showtime,
  createmovie,
  deletemovie,
  showtimes,
} from "../../modules/api/Movie";

import { actionMovies } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

// TODO: Moviews action type
const moviesPanding = () => ({
  type: actionMovies.movieAll.concat("-", Pending),
});

const moviesRejected = error => ({
  type: actionMovies.movieAll.concat("-", Rejected),
  payload: { error },
});

const moviesFulfilled = data => ({
  type: actionMovies.movieAll.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Moview Detail action type
const moviewDetailPanding = () => ({
  type: actionMovies.movieDetail.concat("-", Pending),
});

const moviewDetailRejected = error => ({
  type: actionMovies.movieDetail.concat("-", Rejected),
  payload: {error},
})

const moviewDetailFulfilled = data => ({
  type: actionMovies.movieDetail.concat("-", Fulfilled),
  payload: {data},
})

// TODO: Showtimes action type
const showTimesPending = () => ({
  type: actionMovies.showTimes.concat("-", Pending),
});

const showTimesRejected = error => ({
  type: actionMovies.showTimes.concat("-", Rejected),
  payload: { error },
});

const showTimesFulfilled = data => ({
  type: actionMovies.showTimes.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Showtime action type
const showTimePending = () => ({
  type: actionMovies.showTime.concat("-", Pending),
});

const showTimeRejected = error => ({
  type: actionMovies.showTime.concat("-", Rejected),
  payload: { error },
});

const showTimeFulfilled = data => ({
  type: actionMovies.showTime.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Create moview action type
const createMoviewPending = () => ({
  type: actionMovies.movieCreate.concat("-", Pending),
});

const createMoviewRejected = error => ({
  type: actionMovies.movieCreate.concat("-", Rejected),
  payload: { error },
});

const createMoviewFulfilled = data => ({
  type: actionMovies.movieCreate.concat("-", Fulfilled),
  payload: { data },
});

// TODO: delete movie action type
const deleteMoviePending = () => ({
  type: actionMovies.movieDelete.concat("-", Pending),
});

const deleteMoviewRejected = error => ({
  type: actionMovies.movieDelete.concat("-", Rejected),
  payload: { error },
});

const deleteMoviewFulfilled = data => ({
  type: actionMovies.movieDelete.concat("-", Fulfilled),
  payload: { data },
});

const moviesThunk = (success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(moviesPanding());
      const result = await movies();
      console.log(result.data);
      dispatch(moviesFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(moviesRejected(error));
      typeof denied === "function" && denied();
    }
  }
}

const movieDetailThunk = (id, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(moviewDetailPanding());
      const result = await moviedetail(id);
      console.log(result.data);
      dispatch(moviewDetailFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(moviewDetailRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const showTimesThunk = (success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(showTimesPending());
      const result = await showtimes();
      console.log(result.data);
      dispatch(showTimesFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(showTimesRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const showTimeThunk = (params, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(showTimePending());
      const result = await showtime(params);
      console.log(result.data);
      dispatch(showTimeFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(showTimeRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const createMovieThunk = (body, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(createMoviewPending());
      const result = await createmovie(body);
      console.log(result.data);
      dispatch(createMoviewFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(createMoviewRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const deleteMoviewThunk = (id, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(deleteMoviePending());
      const result = await deletemovie(id);
      console.log(result.data);
      dispatch(deleteMoviewFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(deleteMoviewRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const movieAction = {
  moviesThunk,
  movieDetailThunk,
  showTimesThunk,
  showTimeThunk,
  createMovieThunk,
  deleteMoviewThunk,
}

export default movieAction;