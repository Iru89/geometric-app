import {
    DELETE_FIGURE_ERROR,
    DELETE_FIGURE_REQUEST,
    DELETE_FIGURE_SUCCESS,
    GeometricListActions
} from "../types/geometricListTypes";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../store/indexStore";
import {Action, Dispatch} from "redux";
import {updateTokens, userId} from "../jwtUtilities";
import {showCreateFigure, showList} from "./visibilityFilterActions";
import {logoutUser} from "./authActions";

function deleteFigureRequest(): GeometricListActions {
    return{
        type: DELETE_FIGURE_REQUEST,
        isFetching: true,
    }

}


function deleteFigureSuccess(idFigure: string): GeometricListActions  {
    return {
        type: DELETE_FIGURE_SUCCESS,
        isFetching: false,
        idFigure
    }
}

function deleteFigureError(message: string): GeometricListActions  {
    return{
        type: DELETE_FIGURE_ERROR,
        isFetching: true,
        message,
    }
}

export function fetchDeleteFigure(figureId: any): ThunkAction<void, AppState, null, Action<string>> {

    return async (dispatch: any) => {

        await updateTokens(dispatch);
        const typeToken: any = localStorage.getItem('token_type') || null;
        const accessToken: any = localStorage.getItem('access_token') || null;
        const authHeader: string = typeToken + " " + accessToken;

        const json = {
            id: figureId,
        };

        let config: RequestInit = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        };

        dispatch(deleteFigureRequest());

        const response = await fetch('http://localhost:8081/api/geometric/figure', config);

        if (!response.ok) {
            // const text = await response.text();
            // dispatch(deleteFigureError(text));
        } else {
            const deleteFigureId: any = await response.json();
            dispatch(deleteFigureSuccess(deleteFigureId.id));
            dispatch(showList());
        }


    }
}
