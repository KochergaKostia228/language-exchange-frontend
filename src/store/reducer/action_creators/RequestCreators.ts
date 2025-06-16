import {AppDispatch} from "../../store";
import {$authHost} from "../../../http";
import {IUser} from "../../../models/IUser";
import axios from "axios";
import {RequestSlice} from "../RequestSlice";
import {IRequest} from "../../../models/IRequest";
import {UserSlice} from "../UserSlice";


export const createRequest = (to_user_id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        const {data} = await $authHost.post<IUser[]>('/requests', {to_user_id})

        console.log(data)

        dispatch(RequestSlice.actions.requestUsersFetchingSuccess())
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const fetchIncomingRequests = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        const {data} = await $authHost.get<IRequest[]>('/requests/incoming')

        dispatch(RequestSlice.actions.allRequestsUsersFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const fetchOutgoingRequests = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        const {data} = await $authHost.get<IRequest[]>('/requests/outgoing')

        dispatch(RequestSlice.actions.allRequestsUsersFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const filterRequests = (filterUser: IRequest[]) => (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.allRequestsUsersFetchingSuccess(filterUser))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const acceptRequest = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        await $authHost.put(`requests/${id}/accept`)

        dispatch(RequestSlice.actions.requestUsersFetchingSuccess())
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const declineRequests = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        await $authHost.put(`requests/${id}/decline`)

        dispatch(RequestSlice.actions.requestUsersFetchingSuccess())
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}

export const fetchMatchesRequests = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(RequestSlice.actions.requestFetching())
        const {data} = await $authHost.get<IRequest[]>('/requests/matches')

        dispatch(RequestSlice.actions.allRequestsUsersFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(RequestSlice.actions.requestFetchingError(e.message));
        } else {
            dispatch(RequestSlice.actions.requestFetchingError('Unexpected error'));
        }
    }
}