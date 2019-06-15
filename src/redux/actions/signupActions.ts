import {SignupUser} from "../../types";
import {ThunkAction} from "redux-thunk";
import {Action, Dispatch} from "redux";
import {SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SignupActionTypes} from "../types/signupTypes";
import {AppState} from "../store/indexStore";
import {showSignup} from "./visibilityFilterActions";

function requestSignup(): SignupActionTypes {
    return{
        type: SIGNUP_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        signupMessage: "",
    }
}

function signupSuccess(message: string): SignupActionTypes {
    return{
        type: SIGNUP_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
        signupMessage: message,
    }
}

function signupError(message: string): SignupActionTypes {
    return {
        type: SIGNUP_ERROR,
        isFetching: false,
        isAuthenticated: false,
        signupMessage: message,
    }
}

export function signupUser(signupInfo: SignupUser): ThunkAction<void, AppState, null, Action<string>> {

    let config: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(signupInfo),
    };

    return async (dispatch: Dispatch) => {

        dispatch(requestSignup());

        const response = await fetch('http://localhost:8080/api/auth/signup', config);
        const message = await response.text();
        if (!response.ok) {
            dispatch(signupError(message));
            dispatch(showSignup());
        } else {
            dispatch(signupSuccess(message));
            dispatch(showSignup());
        }
    }
}