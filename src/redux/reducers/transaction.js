import { ActionType } from "redux-promise-middleware";
import { actionStrings, actionTransactions } from "../actions/actionStrings";

const initState = [
  {
    id: null,
    name: "",
    studio: "",
    firstname: "",
    lastname: "",
    status: "",
    date_transaction: null,
    time_transaction: null,
    create_transaction: {
      transaction_id: null,
      redirectUrl: null,
    },
    seat_all: {
      id: null,
      seat: null,
    },
    seat_tag: {
      id: null,
      seat: null,
    },
  },
];

const transactionsReducer = (prevState = initState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getHistory, getSeatAll, getSeatTag } = actionTransactions;
  const { createTransactions } = actionStrings;
  switch (type) {
    case getHistory.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistory.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case getHistory.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        history: payload.data.data,
      };

    // TODO: GET History
    case createTransactions.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransactions.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case createTransactions.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        create_transaction: {
          transaction_id: payload.data.data.transaction_id,
          redirectUrl: payload.data.redirctUrl,
        },
      };

    case getSeatAll.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getSeatAll.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case getSeatAll.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        seat_all: {
          id: payload.data.data.id,
          seat: payload.data.data.seat,
        },
      };

    case getSeatTag.concat("-", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getSeatTag.concat("-", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case getSeatTag.concat("-", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        seat_tag: {
          id: payload.data.data.id,
          seat: payload.data.data.seat,
        },
      };

    default:
      return prevState;
  }
};

export default transactionsReducer;
