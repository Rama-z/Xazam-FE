import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import movieReducer from "./movie";

export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
});
