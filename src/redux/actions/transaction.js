import { ActionType } from "redux-promise-middleware";

import {
  gethistory,
  createTrans,
  getSeatAll,
  getSeatTag,
} from "src/modules/api/Transaction";

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

const getSeatAllPending = () => ({
  type: actionTransactions.getSeatAll.concat("-", Pending),
});

const getSeatAllRejected = (error) => ({
  type: actionTransactions.getSeatAll.concat("-", Rejected),
  payload: { error },
});

const getSeatAllFulfilled = (data) => ({
  type: actionTransactions.getSeatAll.concat("-", Fulfilled),
  payload: { data },
});

const getSeatTagPending = () => ({
  type: actionTransactions.getSeatTag.concat("-", Pending),
});

const getSeatTagRejected = (error) => ({
  type: actionTransactions.getSeatTag.concat("-", Rejected),
  payload: { error },
});

const getSeatTagFulfilled = (data) => ({
  type: actionTransactions.getSeatTag.concat("-", Fulfilled),
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

const getSeatAllThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getSeatAllPending());
      const result = await getSeatAll(token);
      dispatch(getSeatAllFulfilled(result.data));
    } catch (error) {
      console.log(error);
      dispatch(getSeatAllRejected(error));
    }
  };
};

const getSeatTagThunk = (params, token) => {
  return async (dispatch) => {
    try {
      dispatch(getSeatTagPending());
      const result = await getSeatTag(params, token);
      dispatch(getSeatTagFulfilled(result.data));
    } catch (error) {
      console.log(error);
      dispatch(getSeatTagRejected(error));
    }
  };
};

const createTransThunk = (data, token, cbredir) => {
  return async (dispatch) => {
    try {
      dispatch(createTransPending());
      const result = await createTrans(data, token);
      dispatch(createTransFulfilled(result.data));
      if (typeof cbredir === "function") cbredir(result.data.redirctUrl);
    } catch (error) {
      console.log(error);
      dispatch(createTransRejected(error));
    }
  };
};

const transactionAction = {
  getHistoryThunk,
  createTransThunk,
  getSeatAllThunk,
  getSeatTagThunk,
};

export default transactionAction;
