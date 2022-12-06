import { configureStore } from "@reduxjs/toolkit";
// import regSlice from "./reducers/regSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "Xazam",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistedStore = persistStore(store);
export default store;
