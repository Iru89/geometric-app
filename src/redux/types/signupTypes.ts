import {Action} from "redux";

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export interface IRequestSignup extends Action{
    type: typeof SIGNUP_REQUEST,
    isFetching: boolean,
    isAuthenticated: boolean,
    signupMessage: string
}

export interface ISuccessSignup extends Action{
    type: typeof SIGNUP_SUCCESS,
    isFetching: boolean,
    isAuthenticated: boolean,
    signupMessage: string,
}

export interface ISignupError extends Action{
    type: typeof SIGNUP_ERROR,
    isFetching: boolean,
    isAuthenticated: boolean,
    signupMessage: string,
}
export type SignupActionTypes = IRequestSignup | ISuccessSignup | ISignupError;