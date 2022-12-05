import { ActionType } from "redux-promise-middleware";

import { gethistory, createTrans } from "src/modules/api/Transaction";

import { actionStrings, actionTransactions } from "./actionStrings";

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

const createTransPending = () => ({
  type: actionStrings.createTransactions.concat("-", Pending),
});

const createTransRejected = (error) => ({
  type: actionStrings.createTransactions.concat("-", Rejected),
  payload: { error },
});

const createTransFulfilled = (data) => ({
  type: actionStrings.createTransactions.concat("-", Fulfilled),
  payload: { data },
});

const getHistoryThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getHistoryPending());
      const result = await gethistory(token);
      dispatch(getHistoryFulfilled(result.data));
    } catch (error) {
      console.log(error);
      dispatch(getHistoryRejected(error));
    }
  };
};

const createTransThunk = (data, token) => {
  return async (dispatch) => {
    try {
      dispatch(createTransPending());
      const result = await createTrans(data, token);
      dispatch(createTransFulfilled(result.data));
    } catch (error) {
      console.log(error);
      dispatch(createTransRejected(error));
    }
  };
};

const transactionAction = {
  getHistoryThunk,
  createTransThunk,
};

export default transactionAction;
