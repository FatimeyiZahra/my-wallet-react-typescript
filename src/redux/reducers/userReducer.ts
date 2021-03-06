import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
};
const userReducer = (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: "" };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: "login false" };
    default:
      return state;
  }
};

export default userReducer;
