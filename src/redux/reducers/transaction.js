import { ActionType } from "redux-promise-middleware";
import { actionTransactions } from "../actions/actionStrings";

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
  },
];

const transactionsReducer = (prevState = initState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getHistory } = actionTransactions;
  switch (type) {
    // TODO: GET History
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

      default:
        return prevState;
  }
};

export default transactionsReducer;
