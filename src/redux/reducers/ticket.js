import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  ticket: {
    title_movie: null,
    studio: null,
    ticket_count: null,
    seats: null,
    price: null,
    date: null,
    month: null,
    time: null,

  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const ticketReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { ticketResult } = actionStrings;
  switch (type) {
    case ticketResult.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ticketResult.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case ticketResult.concat("_", Fulfilled):
      console.log(payload);
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        ticket: {
            title_movie: payload.data.data.title_movie,
            studio: payload.data.data.studio,
            ticket_count: payload.data.data.ticket_count,
            seats: payload.data.data.seats,
            price: payload.data.data.price,
            date: payload.data.data.date,
            month: payload.data.data.month,
            time: payload.data.data.time,
        },
      };

    default:
      return prevState;
  }
};

export default ticketReducer;
