import { ActionType } from "redux-promise-middleware";
import Payment from "src/pages/payment";
import { actionMovies, actionStrings } from "../actions/actionStrings";

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
  studios: [],
  transfer_data: {
    movie_id: null,
    payment_id: null,
    ticket_count: null,
    total_price: null,
    seat_id: [],
    tsm_id: null,
    studio: null,
  },
};

const movieReduser = (prevState = initialState, { payload, type }) => {
  // console.log(payload);
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {
    movieAll,
    movieDetail,
    showTimes,
    showTime,
    movieCreate,
    movieDelete,
  } = actionMovies;
  const { studios, payment } = actionStrings;
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
      console.log(payload.data.id);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        movieDetail: payload.data,
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

    case studios.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case studios.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case studios.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        studios: payload.data.data,
      };

    case payment:
      return {
        ...prevState,
        transfer_data: {
          token: payload.body?.token
            ? payload.body.token
            : initialState.transfer_data.token,
          movie_id: payload.body?.movie_id
            ? payload.body.movie_id
            : initialState.transfer_data.movie_id,
          payment_id: payload.body?.payment_id
            ? payload.body.payment_id
            : initialState.transfer_data.payment_id,
          ticket_count: payload.body?.ticket_count
            ? payload.body.ticket_count
            : initialState.transfer_data.ticket_count,
          total_price: payload.body?.total_price
            ? payload.body.total_price
            : initialState.transfer_data.total_price,
          seat_id: payload.body?.seat_id
            ? payload.body.seat_id.toString()
            : initialState.transfer_data.seat_id,
          tsm_id: payload.body?.tsm_id
            ? payload.body.tsm_id
            : initialState.transfer_data.tsm_id,
          date: payload.body?.date
            ? payload.body.date
            : initialState.transfer_data.date,
        },
      };

    default:
      return prevState;
  }
};

export default movieReduser;
