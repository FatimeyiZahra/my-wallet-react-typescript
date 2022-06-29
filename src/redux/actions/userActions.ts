import { LoginForm, User, UserDispatch,LOGIN_ERROR,LOGIN_START,LOGIN_SUCCESS,UserAction, UserState } from "../../types/user";
import api from "../../utils/api";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { NavigateFunction } from "react-router-dom";

export const login = (creds: LoginForm,navigate:NavigateFunction): ThunkAction<void, RootState, unknown,  UserAction> =>
async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const response = await api.post<User>("/users/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.token);
    navigate("/")
  } catch {
    dispatch({ type: LOGIN_ERROR });
  }
};
