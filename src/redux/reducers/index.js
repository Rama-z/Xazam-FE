import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import movieReduser from "./movie";

export default combineReducers({
  auth: authReducer,
  movie: movieReduser,
});
