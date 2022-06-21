import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { UserState } from "../../types/user";
import userReducer from "../reducers/userReducer";

interface AppState {
  user: UserState;
}

export const rootReducer = combineReducers<AppState>({
  user: userReducer,

});
export const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunkMiddleware],
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch