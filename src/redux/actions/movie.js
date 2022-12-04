import { ActionType } from "redux-promise-middleware";
import { moviedetail } from "src/modules/api/Movie";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const moviedetailPending = () => ({
  type: actionStrings.movieDetail.concat("_", Pending),
});
const moviedetailRejected = (error) => ({
  type: actionStrings.movieDetail.concat("_", Rejected),
  payload: { error },
});
const moviedetailFulfilled = (data) => ({
  type: actionStrings.movieDetail.concat("_", Fulfilled),
  payload: { data },
});

// const moviedetailThunk = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch(moviedetailPending());
//       const result = await moviedetail(id);
//       console.log(id);
//       dispatch(moviedetailFulfilled(result.data));
//     } catch (error) {
//       dispatch(moviedetailRejected(error));
//     }
//   };
// };

const movieAction = {
  //   moviedetailThunk,
  moviedetailFulfilled,
};

export default movieAction;
