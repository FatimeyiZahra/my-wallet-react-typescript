export const GET_ALL_CATEGORY_SUCCESS = "GET_ALL_CATEGORY_SUCCESS";
export const GET_ALL_CATEGORY_START = "GET_ALL_CATEGORY_START";
export const GET_ALL_CATEGORY_ERROR = "GET_ALL_CATEGORY_ERROR";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const DELETE_SUCCESS_CATEGORY = "DELETE_SUCCESS_CATEGORY";

interface GET_ALL_CATEGORY_SUCCESS {
  type: typeof GET_ALL_CATEGORY_SUCCESS;
  payload: Category[];
}

interface GET_ALL_CATEGORY_START {
  type: typeof GET_ALL_CATEGORY_START;
}

interface GET_ALL_CATEGORY_ERROR {
  type: typeof GET_ALL_CATEGORY_ERROR;
}
interface ADD_CATEGORY_SUCCESS {
  type: typeof ADD_CATEGORY_SUCCESS;
  payload: Category;
}
interface UPDATE_CATEGORY_SUCCESS {
  type: typeof UPDATE_CATEGORY_SUCCESS;
  payload: Category;
}
interface DELETE_SUCCESS_CATEGORY {
  type: typeof DELETE_SUCCESS_CATEGORY;
  payload: number;
}
export interface CategoryForm {
  name: string;
  type: string;
  color?: string;
}
export interface Category {
  id: number;
  name: string;
  type: string;
  color: string;
}

export interface CategoryState {
  data: Category[];
  error: string;
  loading: boolean;
}

export type CategoryActions =
  | GET_ALL_CATEGORY_SUCCESS
  | GET_ALL_CATEGORY_START
  | GET_ALL_CATEGORY_ERROR
  | ADD_CATEGORY_SUCCESS
  | UPDATE_CATEGORY_SUCCESS
  | DELETE_SUCCESS_CATEGORY;
