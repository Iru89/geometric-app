import {SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SignupActionTypes} from "../types/signupTypes";
import {SignupState} from "../../types";

const initialSignup: SignupState = {
    isFetching: false,
    signupMessage: '',
};

// The signupState reducer
export function setSignup(state= initialSignup, action: SignupActionTypes): SignupState {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return Object.assign({}, state,{
                isFetching: false,
            });
        case SIGNUP_SUCCESS:
            return Object.assign({}, state,{
                isFetching: false,
                signupMessage: action.signupMessage,
            });
        case SIGNUP_ERROR:
            return Object.assign({}, state,{
                isFetching: false,
                signupMessage: action.signupMessage,
            });
        default:
            return state;
    }
}