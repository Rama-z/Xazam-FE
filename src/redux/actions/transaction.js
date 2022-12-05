import { ActionType } from "redux-promise-middleware";

import { gethistory } from "../../modules/api/Transaction";

import { actionTransactions } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getHistoryPending = () => ({
  type: actionTransactions.getHistory.concat("-", Pending),
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