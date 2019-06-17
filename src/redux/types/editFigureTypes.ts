import {Action} from "redux";
import {Figure} from "../../typeFigures";

export const SET_TYPE = "SET_TYPE";
export const SET_GEOMETRIC_VALUES = "SET_GEOMETRIC_VALUES";
export const RESET_TMP_FIGURE = "RESET_TMP_FIGURE";

export interface ISetType extends Action{
    type: typeof SET_TYPE,
    figureType: string,
}

export interface ISetGeometricValues extends Action{
    type: typeof SET_GEOMETRIC_VALUES,
    figure: Figure,
}

export interface IResetTmpFigure extends Action{
    type: typeof RESET_TMP_FIGURE,
}

export type TmpFigureActions = ISetType | ISetGeometricValues | IResetTmpFigure;
