import {FilterState} from "../../types";
import {SET_VISIBILITY_FILTER, SHOW_LOGIN, VisibilityFilterActions} from "../types/visibilityFilterTypes";

const initialVisibilityFilter: FilterState = {
    visibilityFilter: SHOW_LOGIN
};

//Reducer per controlar la vista dins el Main
export function setVisibilityFilter(state = initialVisibilityFilter, action: VisibilityFilterActions): FilterState {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.visibilityFilter,
            });
        default:
            return state;
    }
}