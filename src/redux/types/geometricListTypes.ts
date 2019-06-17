import {Figure} from "../../typeFigures";
import {Action} from "redux";

export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_ERROR = 'LIST_ERROR';

export interface IListRequest extends Action{
    type: typeof LIST_REQUEST,
    isFetching: boolean,
}

export interface IListSuccess extends Action{
    type: typeof LIST_SUCCESS,
    isFetching: boolean,
    listFigures: Figure[]
}

export interface IListError extends Action{
    type: typeof LIST_ERROR,
    isFetching: boolean,
    message: string,
}

export const SAVE_FIGURE_REQUEST = 'SAVE_FIGURE_REQUEST';
export const SAVE_FIGURE_SUCCESS = 'SAVE_FIGURE_SUCCESS';
export const SAVE_FIGURE_ERROR = 'SAVE_FIGURE_ERROR';

export interface SaveFigureRequest extends Action{
    type: typeof SAVE_FIGURE_REQUEST,
    isFetching: boolean,
}


export interface SaveFigureSuccess extends Action{
    type: typeof SAVE_FIGURE_SUCCESS,
    isFetching: boolean,
    figure: Figure
}

export interface SaveFigureError extends Action{
    type: typeof SAVE_FIGURE_ERROR,
    isFetching: boolean,
    message: string,
}

export const DELETE_FIGURE_REQUEST = 'DELETE_FIGURE_REQUEST';
export const DELETE_FIGURE_SUCCESS = 'DELETE_FIGURE_SUCCESS';
export const DELETE_FIGURE_ERROR = 'DELETE_FIGURE_ERROR';

export interface DeleteFigureRequest extends Action{
    type: typeof DELETE_FIGURE_REQUEST,
    isFetching: boolean,
}


export interface DeleteFigureSuccess extends Action{
    type: typeof DELETE_FIGURE_SUCCESS,
    isFetching: boolean,
    idFigure: string,
}

export interface DeleteFigureError extends Action{
    type: typeof DELETE_FIGURE_ERROR,
    isFetching: boolean,
    message: string,
}

export const UPDATE_FIGURE_REQUEST = 'UPDATE_FIGURE_REQUEST';
export const UPDATE_FIGURE_SUCCESS = 'UPDATE_FIGURE_SUCCESS';
export const UPDATE_FIGURE_ERROR = 'UPDATE_FIGURE_ERROR';

export interface UpdateFigureRequest extends Action{
    type: typeof UPDATE_FIGURE_REQUEST,
    isFetching: boolean,
}


export interface UpdateFigureSuccess extends Action{
    type: typeof UPDATE_FIGURE_SUCCESS,
    isFetching: boolean,
    figure: Figure
}

export interface UpdateFigureError extends Action{
    type: typeof UPDATE_FIGURE_ERROR,
    isFetching: boolean,
    message: string,
}

export type GeometricListActions =
    IListRequest | IListSuccess | IListError |
    SaveFigureRequest | SaveFigureSuccess | SaveFigureError |
    DeleteFigureRequest | DeleteFigureSuccess | DeleteFigureError |
    UpdateFigureRequest | UpdateFigureSuccess | UpdateFigureError;