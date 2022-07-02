export const GET_ALL_CATEGORY_SUCCESS = "GET_ALL_CATEGORY_SUCCESS";
export const GET_ALL_CATEGORY_START = "GET_ALL_CATEGORY_START";
export const GET_ALL_CATEGORY_ERROR = "GET_ALL_CATEGORY_ERROR";

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
  | GET_ALL_CATEGORY_ERROR;