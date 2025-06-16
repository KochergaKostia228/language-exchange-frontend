import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    user: IUser;
    allUsers: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {
        id: 0,
        email: "",
        full_name: "",
        languages: [],
    },
    allUsers: [],
    isLoading: false,
    error: "",
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userFetching(state){
            state.isLoading = true
            state.error = ""

            console.log(state.isLoading)
        },
        userFetchingSuccess(state,  action: PayloadAction<IUser>){
            state.isLoading = false
            state.error = ""
            state.user = action.payload

            console.log(state.user)
        },
        allUsersFetchingSuccess(state,  action: PayloadAction<IUser[]>){
            state.isLoading = false
            state.error = ""
            state.allUsers = action.payload

            console.log(state.user)
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload

            console.log(state.error)
        }
    },
})

export default UserSlice.reducer