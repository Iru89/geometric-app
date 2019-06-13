import {PROFILE_ERROR, PROFILE_REQUEST, PROFILE_SUCCESS, ProfileActions} from "../types/profileTypes";
import {IProfile} from "../../types";
import {username} from "../jwtUtilities";
import {Dispatch} from "redux";

function profileRequest(): ProfileActions {
    return {
        type: PROFILE_REQUEST,
        isFetching: true,
    }
}

function profileSuccess(profile: IProfile): ProfileActions {
    return {
        type: PROFILE_SUCCESS,
        isFetching: false,
        profile: profile,
    }
}

function profileError(text: string): ProfileActions {
    return {
        type: PROFILE_ERROR,
        isFetching: false,
        message: text,
    }
}

export function getProfile() {
    const typeToken: any = localStorage.getItem('token_type') || null;
    const accessToken: any = localStorage.getItem('access_token') || null;
    const authHeader: string = typeToken + " " + accessToken;

    let config: RequestInit = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': authHeader,
        },
    };

    return async (dispatch: Dispatch) => {
        dispatch(profileRequest());
        const response = await fetch(`http://localhost:8080/api/admin/user/${username()}`, config);

        if (!response.ok) {
            const text = await response.text();
            dispatch(profileError(text));
        } else {
            const profile = await response.json();
            dispatch(profileSuccess(profile));
        }
    };
}