import {ThunkAction} from "redux-thunk";
import {Action, Dispatch} from "redux";
import {AppState} from "../store/indexStore";
import {GeometricListActions, LIST_ERROR, LIST_REQUEST, LIST_SUCCESS} from "../types/geometricListTypes";
import {userId} from "../jwtUtilities";
import {Figure} from "../../typeFigures";

function listRequest(): GeometricListActions {
    return{
        type: LIST_REQUEST,
        isFetching: true,
    }
}

function listSucces(list: Figure[]): GeometricListActions {
    return{
        type: LIST_SUCCESS,
        isFetching: false,
        listFigures: list,
    }
}

function listError(text: string): GeometricListActions {
    return{
        type: LIST_ERROR,
        isFetching: false,
        message: text
    }
}

export function getListFigures(): ThunkAction<void, AppState, null, Action<string>> {

    const typeToken: any = localStorage.getItem('token_type') || null;
    const accessToken: any = localStorage.getItem('access_token') || null;
    const authHeader: string = typeToken + " " + accessToken;


    let config: RequestInit = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': authHeader,
            'Content-Type':'application/json'
        },
    };

    return async (dispatch: Dispatch) => {
        dispatch(listRequest());
        const response = await fetch('http://localhost:8081/api/geometric/figure', config);

        if (!response.ok) {
            const text = await response.text();
            dispatch(listError(text));
        } else {
            const list = await response.json();
            dispatch(listSucces(list));
        }
    };
}

