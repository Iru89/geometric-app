import {Action} from "redux";
import {Figure} from "../../typeFigures";
import {IProfile} from "../../types";

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_ERROR = 'PROFILE_ERROR';

export interface IProfileRequest extends Action{
    type: typeof PROFILE_REQUEST,
    isFetching: boolean,
}

export interface IProfileSuccess extends Action{
    type: typeof PROFILE_SUCCESS,
    isFetching: boolean,
    profile: IProfile,
}

export interface IProfileError extends Action{
    type: typeof PROFILE_ERROR,
    isFetching: boolean,
    message: string,
}

export type ProfileActions = IProfileRequest | IProfileSuccess | IProfileError;