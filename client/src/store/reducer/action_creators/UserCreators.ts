import {AppDispatch} from "../../store";
import {UserSlice} from "../UserSlice";
import {$authHost} from "../../../http";
import {IUser} from "../../../models/IUser";
import axios from "axios";

export const myProfile = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.userFetching())
        const {data} = await $authHost.get<IUser>('/users/me')

        dispatch(UserSlice.actions.userFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(UserSlice.actions.userFetchingError(e.message));
        } else {
            dispatch(UserSlice.actions.userFetchingError('Unexpected error'));
        }
    }
}


export const putUserLanguages = (target: number[], native: number[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.userFetching())
        const {data} = await $authHost.put<IUser>('/users/me/languages', {native, target})

        console.log(data)

        dispatch(UserSlice.actions.userFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(UserSlice.actions.userFetchingError(e.message));
        } else {
            dispatch(UserSlice.actions.userFetchingError('Unexpected error'));
        }
    }
}

export const filterUser = (filterUser: IUser[]) => (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.allUsersFetchingSuccess(filterUser))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(UserSlice.actions.userFetchingError(e.message));
        } else {
            dispatch(UserSlice.actions.userFetchingError('Unexpected error'));
        }
    }
}


export const getAllUsers = (target?: number, native?: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.userFetching())
        const {data} = await $authHost.get<IUser[]>('/users', {
            params: {
                native: native,
                target: target
            }
        })

        console.log(data)

        dispatch(UserSlice.actions.allUsersFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(UserSlice.actions.userFetchingError(e.message));
        } else {
            dispatch(UserSlice.actions.userFetchingError('Unexpected error'));
        }
    }
}