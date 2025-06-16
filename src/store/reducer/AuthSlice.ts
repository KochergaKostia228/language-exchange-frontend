import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface AuthState {
    isLoading: boolean;
    isAuth: boolean;
    error: string;
}

const initialState: AuthState = {
    isLoading: false,
    isAuth: !!localStorage.getItem('token'),
    error: ""
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authFetching(state){
            state.isLoading = true
            state.error = ""
        },
        authFetchingSuccess(state, action: PayloadAction<boolean>){
            state.isLoading = false
            state.error = ""
            state.isAuth = action.payload
        },
        authFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload

            console.log(state.error)
        }
    }
})

export default AuthSlice.reducer