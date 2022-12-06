import { ActionType } from "redux-promise-middleware";

<<<<<<< HEAD
import { gethistory } from "../../modules/api/Transaction";

import { actionTransactions } from "./actionStrings";
=======
import { gethistory, createTrans } from "src/modules/api/Transaction";

import { actionStrings, actionTransactions } from "./actionStrings";
>>>>>>> 43055339896278aee4cd635e89bcf7324ec28514

const { Pending, Rejected, Fulfilled } = ActionType;

const getHistoryPending = () => ({
  type: actionTransactions.getHistory.concat("-", Pending),
<<<<<<< HEAD
})

const getHistoryRejected = (error) => ({
  type: actionTransactions.getHistory.concat("-", Rejected),
  payload: {error},
})

const getHistoryFulfilled = (data) => ({
  type: actionTransactions.getHistory.concat("-", Fulfilled),
  payload: {data},
})

const getHistoryThunk = (token, success, denied) => {
  return async(dispatch) => {
    try {
      dispatch(getHistoryPending());
      const result = await gethistory(token);
      console.log(result.data);
      dispatch(getHistoryFulfilled(result.data));
      typeof success === "function" && success();
    } catch (error) {
      dispatch(getHistoryRejected(error));
      typeof denied === "function" && denied();
    }
  }
}


const transactionAction = {
  getHistoryThunk,
}

export default transactionAction;
=======
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
>>>>>>> 43055339896278aee4cd635e89bcf7324ec28514
