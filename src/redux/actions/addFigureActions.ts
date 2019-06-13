import {
    GeometricListActions,
    SAVE_FIGURE_ERROR,
    SAVE_FIGURE_REQUEST,
    SAVE_FIGURE_SUCCESS,
} from "../types/geometricListTypes";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../store/indexStore";
import {Action} from "redux";
import {updateTokens, userId} from "../jwtUtilities";
import {Figure} from "../../typeFigures";
import {showList} from "./visibilityFilterActions";


function requestSaveFigure(): GeometricListActions {
    return {
        type: SAVE_FIGURE_REQUEST,
        isFetching: true,
    }
}

function successSaveFigure(figure: Figure): GeometricListActions {
    return {
        type: SAVE_FIGURE_SUCCESS,
        isFetching: false,
        figure,
    }
}

function errorSaveFigure(message: string): GeometricListActions {
    return {
        type: SAVE_FIGURE_ERROR,
        isFetching: false,
        message,
    }
}



export function fetchFigure(figure: Figure): ThunkAction<void, AppState, null, Action<string>> {

    return async (dispatch: any) => {

        await updateTokens(dispatch);
        const typeToken: any = localStorage.getItem('token_type') || null;
        const accessToken: any = localStorage.getItem('access_token') || null;
        const authHeader: string = typeToken + " " + accessToken;

        const json = {
            figure: figure,
        };

        let config: RequestInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        };

        dispatch(requestSaveFigure());

        const response = await fetch('http://localhost:8081/api/geometric/figure', config);

        if (!response.ok) {
            // const text = await response.text();
            // dispatch(errorSaveFigure(text));
            // dispatch(showCreateFigure())
        } else {
            const figureWithId: any = await response.json();
            dispatch(successSaveFigure(figureWithId));
            dispatch(showList());
        }
    }
}
