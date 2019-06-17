import {TmpFigureState} from "../../types";
import {RESET_TMP_FIGURE, SET_GEOMETRIC_VALUES, SET_TYPE, TmpFigureActions} from "../types/editFigureTypes";

const initialState: any = {
    selectType: "",
    figure: undefined
};

export function setEditFigure(state = initialState, action: TmpFigureActions): TmpFigureState {
    switch (action.type) {
        case SET_TYPE:
            return Object.assign({}, state, {
                selectType: action.figureType,
                figure: {
                    type: action.figureType,
                    color: "#000000",
                }
            });
        case SET_GEOMETRIC_VALUES:
            return Object.assign({}, state, {
                figure: action.figure
            });
        case RESET_TMP_FIGURE:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}
