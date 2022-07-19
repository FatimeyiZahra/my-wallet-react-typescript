import { CategoryActions, CategoryState } from "../../types/category";

const initialState: CategoryState = {
  data: [],
  loading: false,
  error: "",
};

const categoryReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case "GET_ALL_CATEGORY_START":
      return { ...state, loading: true, error: "" };
    case "GET_ALL_CATEGORY_SUCCESS":
      return { ...state, data: action.payload, loading: false, error: "" };
    case "GET_ALL_CATEGORY_ERROR":
      return { ...state, loading: false, error: "cant get the  categories" };
    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };
    case "DELETE_SUCCESS_CATEGORY":
      return {
        ...state,
        loading: false,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default categoryReducer;
