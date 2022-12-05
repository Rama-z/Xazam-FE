import { ActionType } from "redux-promise-middleware";

import { gethistory } from "src/modules/api/Transaction";

import { actionTransactions } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getHistoryPending = () => ({
  type: actionTransactions.getHistory.concat("-", Pending),
});

const getHistoryRejected = (error) => ({
  type: actionTransactions.getHistory.concat("-", Rejected),
  payload: { error },
});

const getHistoryFulfilled = (data) => ({
  type: actionTransactions.getHistory.concat("-", Fulfilled),
  payload: { data },
});

const getHistoryThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getHistoryPending());
      const result = await gethistory(token);
      // console.log(result.data);
      dispatch(getHistoryFulfilled(result.data));
    } catch (error) {
      console.log(error);
      dispatch(getHistoryRejected(error));
    }
  };
};

const transactionAction = {
  getHistoryThunk,
};

export default transactionAction;
