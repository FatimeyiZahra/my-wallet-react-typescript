import {
  LoginForm,
  User,
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  UserAction,
} from "../../types/user";
import api from "../../utils/api";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

export const login = (
  creds: LoginForm,
  navigate: NavigateFunction
): ThunkAction<void, RootState, unknown, UserAction> => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const response = await api().post<User>("/users/login", creds);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    localStorage.setItem("token", response.data.token);

    navigate("/");
  } catch {
    dispatch({ type: LOGIN_ERROR });
    localStorage.removeItem("token");
  }
};
