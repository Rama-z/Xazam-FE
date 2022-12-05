import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "./actionStrings";
import { ticketApi } from "src/modules/api/Auth";
const { Pending, Rejected, Fulfilled } = ActionType;

const ticketPending = () => ({
  type: actionStrings.ticketResult.concat("_", Pending),
});
const ticketRejected = (error) => ({
  type: actionStrings.ticketResult.concat("_", Rejected),
  payload: { error },
});
const ticketFulfilled = (data) => ({
  type: actionStrings.ticketResult.concat("_", Fulfilled),
  payload: { data },
});

const getTicketThunk = (
  token,
  setTitle,
  setStudio,
  setTicketCount,
  setSeat,
  setPrice,
  setDate,
  setMonth,
  setTime
) => {
  return async (dispatch) => {
    try {
      dispatch(ticketPending());
      const result = await ticketApi(
        token,
        // kirim id ticket disini
        );
      dispatch(ticketFulfilled(result.data));
      setTitle(result.data.data.title_movie);
      setStudio(result.data.data.studio);
      setTicketCount(result.data.data.ticket_count);
      setSeat(result.data.data.seats);
      setPrice(result.data.data.price);
      setDate(result.data.data.date);
      setMonth(result.data.data.month);
      setTime(result.data.data.time);
    
    } catch (error) {
      dispatch(ticketRejected(error));
    }
  };
};

const ticketAction = {
  getTicketThunk,
};

export default ticketAction;
