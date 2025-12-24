// src/app/store.jsx
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/auth.slice";
import { persistReducer } from "redux-persist";
import persistConfig from "../configs/persist.config";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
