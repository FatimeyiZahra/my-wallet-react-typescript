import { ThunkAction } from "redux-thunk";
import { Category, CategoryActions,CategoryForm,GET_ALL_CATEGORY_ERROR,GET_ALL_CATEGORY_START, GET_ALL_CATEGORY_SUCCESS } from "../../types/category";
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

export const addCategory=(form:CategoryForm): ThunkAction<void, RootState, unknown, CategoryActions>=>async (dispatch)=>{
    const response= await api().post<Category>("/categories", form)
    dispatch({type:"ADD_CATEGORY_SUCCESS",payload:response.data})
}