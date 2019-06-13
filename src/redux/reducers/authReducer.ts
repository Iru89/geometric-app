import {
    LoginActions,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS, REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_ERROR

} from "../types/loginTypes";
import {AuthState} from "../../types";
import {isAuthenticated} from "../jwtUtilities";


//The starting state sets authentication
// // based on a token being in local storage. In a real app,
// // we would also want a util to check if the token is expired.
const initialAuth: AuthState = {
    isFetching: false,
    isAuthenticated: isAuthenticated(),
    loginMessage: '',
};

// The auth reducer.
 export function auth(state = initialAuth, action: LoginActions): AuthState {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
            });
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                loginMessage: action.loginMessage,
            });
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
            });
        case REFRESH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case REFRESH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
            });
        case REFRESH_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
            });
        default:
            return state;
    }
}


