import {configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import persistedReducer from "../RootReducer/rootReducer";

let Middlewares = (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false});
if (process.env.NODE_ENV === "development") {
  Middlewares = (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: Middlewares,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
