import { ThunkDispatch } from "redux-thunk";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export interface User {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}
export interface LoginForm {
  username: string;
  password: string;
}

export interface UserState {
  data: User;
  loading: boolean;
  error: string;
}

interface LOGIN_START {
  type:typeof LOGIN_START;
}
interface LOGIN_SUCCESS {
  type:typeof LOGIN_SUCCESS;
  payload: User;
}

interface LOGIN_ERROR {
  type:typeof LOGIN_ERROR;
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
