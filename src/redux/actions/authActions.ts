import {Credentials} from "../../types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Action, AnyAction, Dispatch} from "redux";
import {
    LoginActions,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS, REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_ERROR
} from "../types/loginTypes";
import {AppState} from "../store/indexStore";
import {getListFigures} from "./listFigureActions";
import {showList, showLogin} from "./visibilityFilterActions";
import {getProfile} from "./profileActions";

function requestLogin (): LoginActions {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function receiveLogin(): LoginActions {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

function loginError(message:string): LoginActions {
    return {
        type: LOGIN_ERROR,
        isFetching: false,
        isAuthenticated: false,
        loginMessage: message,
    }
}
// dispatches actions along the way
export function loginUser(credentials: Credentials): ThunkAction<void, AppState, null, Action<string>> {

    let config: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(credentials),
    };

    return async (dispatch: ThunkDispatch<any,any,AnyAction>) => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin());

        const response = await fetch('http://localhost:8080/api/auth/login', config);

        if (!response.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            const text = await response.text();
            dispatch(loginError(text));
            dispatch(showLogin());
        } else {
            const jwt = await response.json();
            // If login was successful, set the token in local storage
            localStorage.setItem('token_type', jwt.tokenType);
            localStorage.setItem('access_token', jwt.accessToken);
            localStorage.setItem('refresh_token', jwt.refreshToken);
            // Dispatch the success action
            dispatch(receiveLogin());
            dispatch(getListFigures());
            dispatch(getProfile());
            dispatch(showList());
        }
    }
}

function requestLogout(): LoginActions {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout(): LoginActions {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

// Logs the user out
export function logoutUser(): any {
    return (dispatch: Dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('token_type');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(receiveLogout());
        dispatch(showLogin());
    }
}

function requestRefresh(): LoginActions {
    return {
        type: REFRESH_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function receiveRefresh(): LoginActions {
    return {
        type: REFRESH_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

function errorRefresh(message:string): LoginActions {
    return {
        type: REFRESH_ERROR,
        isFetching: false,
        isAuthenticated: false,
    }
}

export function fetchRefreshTokens(): ThunkAction<void, AppState, null, Action<string>> {

    const refreshToken: any = localStorage.getItem('refresh_token') || null;
    const authHeader: string = "BearerRefresh " + refreshToken;

    let config: RequestInit = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': authHeader,
            'Content-Type':'application/json'
        },
    };

    return async (dispatch: Dispatch) => {
        dispatch(requestRefresh());

        const response = await fetch('http://localhost:8080/api/auth/refresh', config);

        if (!response.ok) {
            const text = await response.text();
            dispatch(errorRefresh(text));
            dispatch(logoutUser());
            dispatch(showLogin());
        } else {

            const jwt = await response.json();
            localStorage.setItem('token_type', jwt.tokenType);
            localStorage.setItem('access_token', jwt.accessToken);
            localStorage.setItem('refresh_token', jwt.refreshToken);

            dispatch(receiveRefresh());
        }
    }

}