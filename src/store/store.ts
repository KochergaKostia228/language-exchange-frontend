import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./reducer/AuthSlice"
import UserReducer from "./reducer/UserSlice"
import LanguageReducer from "./reducer/LanguageSlice"
import RequestReducer from "./reducer/RequestSlice"


const rootReducer = combineReducers({
    AuthReducer,
    UserReducer,
    LanguageReducer,
    RequestReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']