import { ThunkAction } from "redux-thunk";
import { Category, CategoryActions,GET_ALL_CATEGORY_ERROR,GET_ALL_CATEGORY_START, GET_ALL_CATEGORY_SUCCESS } from "../../types/category";
import api from "../../utils/api";
import { RootState } from "../store/store";


export const getAllCategory= () : ThunkAction<void, RootState, unknown, CategoryActions> => async (dispatch) =>{
    dispatch({type:GET_ALL_CATEGORY_START})
    try {
        const response= await api().get<Category[]>("/categories")
        dispatch({type:GET_ALL_CATEGORY_SUCCESS,payload:response.data})
    } catch  {
        dispatch({type:GET_ALL_CATEGORY_ERROR})
    }
} 