import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILanguage} from "../../models/ILanguage";


interface LanguageState {
    isLoading: boolean;
    languages: ILanguage[];
    error: string;
}

const initialState: LanguageState = {
    isLoading: false,
    languages: [],
    error: ""
}

export const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        languageFetching(state){
            state.isLoading = true
            state.error = ""
        },
        languageFetchingSuccess(state, action: PayloadAction<ILanguage[]>){
            state.isLoading = false
            state.error = ""
            state.languages = action.payload
        },
        languageFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default LanguageSlice.reducer