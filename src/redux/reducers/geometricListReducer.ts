import {
    DELETE_FIGURE_ERROR,
    DELETE_FIGURE_SUCCESS,
    GeometricListActions,
    LIST_ERROR,
    LIST_REQUEST,
    LIST_SUCCESS, SAVE_FIGURE_ERROR, SAVE_FIGURE_REQUEST,
    SAVE_FIGURE_SUCCESS, UPDATE_FIGURE_ERROR, UPDATE_FIGURE_REQUEST, UPDATE_FIGURE_SUCCESS
} from "../types/geometricListTypes";
import {ListFiguresState} from "../../types";
import {Figure} from "../../typeFigures";

const initialGeometricList: ListFiguresState = {
    isFetching: false,
    listFigures: []
};

export function setGeometricList(state = initialGeometricList, action: GeometricListActions): ListFiguresState {
    switch (action.type) {
        // DURANT EL REQUEST PODRIEM POSSSAR UNA BARRA DE CARREGA
        case LIST_REQUEST:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                listFigures: []
            });
        case LIST_SUCCESS:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                listFigures: action.listFigures
            });
        case LIST_ERROR:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                listFigures: []
            });
        case SAVE_FIGURE_REQUEST:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
            });
        case SAVE_FIGURE_SUCCESS:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                listFigures: [
                    ...state.listFigures,
                    action.figure
                ]
            });
        case SAVE_FIGURE_ERROR:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                message: action.message
            });
        case DELETE_FIGURE_SUCCESS:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                listFigures: state.listFigures.filter(
                    (figure: Figure) => {return figure.id !== action.idFigure }
                    )
            });
        case DELETE_FIGURE_ERROR:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                message: action.message
            });
        case UPDATE_FIGURE_REQUEST:
            return Object.assign({}, state, {
                isFetchinge: action.isFetching
            });
        case UPDATE_FIGURE_SUCCESS:
            return Object.assign({}, state, {
                isFetchinge: action.isFetching,
                listFigures: state.listFigures.map((f) => {
                    if(f.id === action.figure.id) {
                         return action.figure
                    }
                    return f;
                })
            });
        case UPDATE_FIGURE_ERROR:
            return Object.assign({}, state, {
                isFetchinge: action.isFetching
            });
        default:
            return state;
    }
}