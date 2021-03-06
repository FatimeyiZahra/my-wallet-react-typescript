import { ThunkAction } from "redux-thunk";
import { Category, CategoryActions,CategoryForm,DELETE_SUCCESS_CATEGORY,GET_ALL_CATEGORY_ERROR,GET_ALL_CATEGORY_START, GET_ALL_CATEGORY_SUCCESS, UPDATE_CATEGORY_SUCCESS } from "../../types/category";
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

export const addCategory=(form:Partial<CategoryForm>): ThunkAction<void, RootState, unknown, CategoryActions>=>async (dispatch)=>{
    const response= await api().post<Category>("/categories", form)
    dispatch({type:"ADD_CATEGORY_SUCCESS",payload:response.data})
}

export const updateCategory=(id:number,form:CategoryForm):ThunkAction<void,RootState,unknown,CategoryActions>=>async(dispatch)=>{
    const response= await api().put<Category>(`/categories/${id}`,form)
    dispatch({type:UPDATE_CATEGORY_SUCCESS, payload:response.data})
}

export const deleteCategory=(id:number):ThunkAction<void,RootState,unknown,CategoryActions>=>async(dispatch)=>{
    await api().delete("/categories/" + id);
    dispatch({type:DELETE_SUCCESS_CATEGORY,payload:id})
}