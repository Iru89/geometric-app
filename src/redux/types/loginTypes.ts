// There are three possible states for our login
// process and we need actions for each of them
import {Action} from "redux";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

interface ILoginRequest extends Action{
    type: typeof LOGIN_REQUEST,
    isFetching: boolean,
    isAuthenticated: boolean,
}

interface ILoginSuccess extends Action{
    type: typeof LOGIN_SUCCESS,
    isFetching: boolean,
    isAuthenticated: boolean,
}

interface ILoginError extends Action{
    type: typeof LOGIN_ERROR,
    isFetching: boolean,
    isAuthenticated: boolean,
    loginMessage: string,
}

// Calls the API to get a token and
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

interface ILogoutRequest extends Action{
    type: typeof LOGOUT_REQUEST,
    isFetching: boolean,
    isAuthenticated: boolean
}

interface ILogoutSuccess extends Action{
    type: typeof LOGOUT_SUCCESS,
    isFetching: boolean,
    isAuthenticated: boolean
}

export const REFRESH_REQUEST = 'REFRESH_REQUEST';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_ERROR = 'REFRESH_ERROR';

interface IRequestRefresh extends Action{
        type: typeof REFRESH_REQUEST,
        isFetching: boolean,
        isAuthenticated: boolean,
}

interface IReceiveRefresh extends Action{
        type: typeof REFRESH_SUCCESS,
        isFetching: boolean,
        isAuthenticated: boolean,
}

interface IErrorRefresh extends Action{
        type: typeof REFRESH_ERROR,
        isFetching: boolean,
        isAuthenticated: boolean,
}


export type LoginActions = ILoginRequest | ILoginSuccess | ILoginError |
    IRequestRefresh | IReceiveRefresh | IErrorRefresh |
    ILogoutRequest | ILogoutSuccess;