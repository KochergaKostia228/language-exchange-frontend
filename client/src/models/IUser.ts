import {ILanguage} from "./ILanguage";

export interface IUser{
    id: number;
    email: string;
    full_name: string;
    languages: ILanguage[];
}