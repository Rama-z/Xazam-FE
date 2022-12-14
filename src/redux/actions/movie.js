import { ActionType } from "redux-promise-middleware";
import {
  movies,
  moviedetail,
  showtime,
  createmovie,
  deletemovie,
  showtimes,
  studios,
} from "../../modules/api/Movie";

import { actionMovies, actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

// TODO: Moviews action type
const moviesPanding = () => ({
  type: actionMovies.movieAll.concat("-", Pending),
});

const moviesRejected = (error) => ({
  type: actionMovies.movieAll.concat("-", Rejected),
  payload: { error },
});

const moviesFulfilled = (data) => ({
  type: actionMovies.movieAll.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Moview Detail action type
const movieDetailPanding = () => ({
  type: actionMovies.movieDetail.concat("-", Pending),
});

const movieDetailRejected = (error) => ({
  type: actionMovies.movieDetail.concat("-", Rejected),
  payload: { error },
});

const movieDetailFulfilled = (data) => ({
  type: actionMovies.movieDetail.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Showtimes action type
const showTimesPending = () => ({
  type: actionMovies.showTimes.concat("-", Pending),
});

const showTimesRejected = (error) => ({
  type: actionMovies.showTimes.concat("-", Rejected),
  payload: { error },
});

const showTimesFulfilled = (data) => ({
  type: actionMovies.showTimes.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Showtime action type
const showTimePending = () => ({
  type: actionMovies.showTime.concat("-", Pending),
});

const showTimeRejected = (error) => ({
  type: actionMovies.showTime.concat("-", Rejected),
  payload: { error },
});

const showTimeFulfilled = (data) => ({
  type: actionMovies.showTime.concat("-", Fulfilled),
  payload: { data },
});

// TODO: Create moview action type
const createMoviePending = () => ({
  type: actionMovies.movieCreate.concat("-", Pending),
});

const createMovieRejected = (error) => ({
  type: actionMovies.movieCreate.concat("-", Rejected),
  payload: { error },
});

const createMovieFulfilled = (data) => ({
  type: actionMovies.movieCreate.concat("-", Fulfilled),
  payload: { data },
});

// TODO: delete movie action type
const deleteMoviePending = () => ({
  type: actionMovies.movieDelete.concat("-", Pending),
});

const deleteMovieRejected = (error) => ({
  type: actionMovies.movieDelete.concat("-", Rejected),
  payload: { error },
});

const deleteMovieFulfilled = (data) => ({
  type: actionMovies.movieDelete.concat("-", Fulfilled),
  payload: { data },
});

const studioPending = () => ({
  type: actionStrings.studios.concat("-", Pending),
});

const studioRejected = (error) => ({
  type: actionStrings.studios.concat("-", Rejected),
  payload: { error },
});

const studioFulfilled = (data) => ({
  type: actionStrings.studios.concat("-", Fulfilled),
  payload: { data },
});

const payment = (body) => ({
  type: actionStrings.payment,
  payload: { body },
});

const moviesThunk = (params, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(moviesPanding());
      const result = await movies(params);
      dispatch(moviesFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(moviesRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const movieDetailThunk = (id, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(movieDetailPanding());
      const result = await moviedetail(id);
      dispatch(movieDetailFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(movieDetailRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const showTimesThunk = (params, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(showTimesPending());
      const result = await showtimes(params);
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
      dispatch(createMoviePending());
      const result = await createmovie(body);
      dispatch(createMovieFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(createMovieRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const deleteMovieThunk = (id, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(deleteMoviePending());
      const result = await deletemovie(id);
      dispatch(deleteMovieFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(deleteMovieRejected(error));
      typeof denied === "function" && denied();
    }
  };
};

const studiosThunk = (params, success, denied) => {
  return async (dispatch) => {
    try {
      dispatch(studioPending());
      const result = await studios();
      dispatch(studioFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(studioRejected(error));
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
  deleteMovieThunk,
  studiosThunk,
  payment,
  movieDetailFulfilled,
};

export default movieAction;
