import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { UserState } from "../../types/user";
import categoryReducer from "../reducers/categoryReduce";
import userReducer from "../reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    category:categoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// interface AppState {
//   user: UserState;
// }

// export const rootReducer = combineReducers<AppState>({
//   user: userReducer,

// });
