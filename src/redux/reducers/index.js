import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import movieReduser from "./movie";
import transactionsReducer from "./transaction";
import ticketReducer from "./ticket";

export default combineReducers({
  auth: authReducer,
  movie: movieReduser,
  profile: profileReducer,
  ticket: ticketReducer,
  transaction: transactionsReducer,
});
