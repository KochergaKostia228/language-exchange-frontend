import {IUser} from "./IUser";

export interface IRequest {
    id: number,
    partner: IUser,
    status: string,
    date: Date,
}