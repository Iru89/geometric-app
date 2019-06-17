import {RESET_TMP_FIGURE, SET_GEOMETRIC_VALUES, SET_TYPE, TmpFigureActions} from "../types/editFigureTypes";
import {Figure} from "../../typeFigures";

export function setType(type: string): TmpFigureActions {
    return {
        type: SET_TYPE,
        figureType: type
    }
}

export function setTmpFigure(figure: Figure): TmpFigureActions{
    return{
        type: SET_GEOMETRIC_VALUES,
        figure: figure
    }
}

export function resetTmpFigure(): TmpFigureActions{
    return{
        type: RESET_TMP_FIGURE
    }
}