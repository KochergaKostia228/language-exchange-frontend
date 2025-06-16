import {AppDispatch} from "../../store";
import {LanguageSlice} from "../LanguageSlice";
import {$authHost} from "../../../http";
import {ILanguage} from "../../../models/ILanguage";
import axios from "axios";

export const getLanguages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(LanguageSlice.actions.languageFetching())
        const {data} = await $authHost.get<ILanguage[]>('/language/get')

        console.log(data)

        dispatch(LanguageSlice.actions.languageFetchingSuccess(data))
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            dispatch(LanguageSlice.actions.languageFetchingError(e.message));
        } else {
            dispatch(LanguageSlice.actions.languageFetchingError('Unexpected error'));
        }
    }
}