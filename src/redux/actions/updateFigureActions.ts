import {
    GeometricListActions, UPDATE_FIGURE_ERROR, UPDATE_FIGURE_REQUEST, UPDATE_FIGURE_SUCCESS,

} from "../types/geometricListTypes";
import {Figure} from "../../typeFigures";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../store/indexStore";
import {Action} from "redux";
import {updateTokens} from "../jwtUtilities";
import {resetTmpFigure} from "./editFigureActions";
import {showList} from "./visibilityFilterActions";

function requestUpdateFigure(): GeometricListActions {
    return {
        type: UPDATE_FIGURE_REQUEST,
        isFetching: true,
    }
}

function successUpdateFigure(figure: Figure): GeometricListActions {
    return {
        type: UPDATE_FIGURE_SUCCESS,
        isFetching: false,
        figure,
    }
}

function errorUpdateFigure(message: string): GeometricListActions {
    return {
        type: UPDATE_FIGURE_ERROR,
        isFetching: false,
        message,
    }
}

export function fetchUpdateFigure(figure: Figure): ThunkAction<void, AppState, null, Action<string>> {

    return async (dispatch: any) => {

        await updateTokens(dispatch);
        const accessToken: any = localStorage.getItem('access_token') || null;
        const authHeader: string = "Bearer " + accessToken;

        const json = {
            figure: figure,
        };

        let config: RequestInit = {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        };

        dispatch(requestUpdateFigure());

        const response = await fetch('http://localhost:8081/api/geometric/figure', config);

        if (!response.ok) {
            const text = await response.text();
            dispatch(errorUpdateFigure(text));
        } else {
            const figureResponse: Figure = await response.json();
            dispatch(successUpdateFigure(figureResponse));
            dispatch(resetTmpFigure());
            dispatch(showList());
        }
    }
}