import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRequest} from "../../models/IRequest";


interface RequestState {
    requests: IRequest[];
    isLoading: boolean;
    error: string;
}

const initialState: RequestState = {
    requests: [],
    isLoading: false,
    error: "",
}

export const RequestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        requestFetching(state){
            state.isLoading = true
            state.error = ""

            console.log(state.isLoading)
        },
        requestUsersFetchingSuccess(state){
            state.isLoading = false
            state.error = ""
        },
        allRequestsUsersFetchingSuccess(state,  action: PayloadAction<IRequest[]>){
            state.isLoading = false
            state.error = ""
            state.requests = action.payload

        },
        requestFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload

            console.log(state.error)
        }
    },
})

export default RequestSlice.reducer