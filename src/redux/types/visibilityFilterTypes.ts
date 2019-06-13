import {Action} from "redux";

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const  SHOW_LOGIN: string = 'SHOW_LOGIN';
export const  SHOW_SIGNUP: string = 'SHOW_SIGNUP';
export const SHOW_LIST: string = 'SHOW_LIST';
export const SHOW_CREATE_FIGURE: string = 'SHOW_CREATE_FIGURE';
export const SHOW_PROFILE: string = 'SHOW_PROFILE';

export interface IVisibilityFilter extends Action{
    type: typeof SET_VISIBILITY_FILTER,
    visibilityFilter: string,
}

export type VisibilityFilterActions = IVisibilityFilter;