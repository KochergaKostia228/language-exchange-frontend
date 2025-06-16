import {AppDispatch} from "../../store";
import {AuthSlice} from "../AuthSlice";
import {$host} from "../../../http";
import axios from "axios";

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthSlice.actions.authFetching())
        const {data} = await $host.post<string>('/auth/login', {email,password})
        localStorage.setItem('token', data)

        dispatch(AuthSlice.actions.authFetchingSuccess(true))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            const message = e.response?.data?.message ?? 'Unknown server error';

            dispatch(AuthSlice.actions.authFetchingError(message));
        } else {
            dispatch(AuthSlice.actions.authFetchingError('Unknown server error'));
        }
    }
}

export const register = (email: string, password: string, full_name: string, accept_password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthSlice.actions.authFetching())
        await $host.post<string>('/auth/registration', {email,password, full_name, accept_password})

        dispatch(AuthSlice.actions.authFetchingSuccess(false))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            const message = e.response?.data?.message ?? 'Unknown server error';

            dispatch(AuthSlice.actions.authFetchingError(message));
        } else {
            dispatch(AuthSlice.actions.authFetchingError('Unknown server error'));
        }
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthSlice.actions.authFetching())
        localStorage.removeItem('token');

        dispatch(AuthSlice.actions.authFetchingSuccess(false))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            const message = e.response?.data?.message ?? 'Unknown server error';

            dispatch(AuthSlice.actions.authFetchingError(message));
        } else {
            dispatch(AuthSlice.actions.authFetchingError('Unknown server error'));
        }
    }
}