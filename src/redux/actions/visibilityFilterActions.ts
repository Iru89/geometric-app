import {
    SET_VISIBILITY_FILTER,
    SHOW_CREATE_FIGURE,
    SHOW_LIST,
    SHOW_LOGIN,
    SHOW_SIGNUP,
    SHOW_PROFILE,
    VisibilityFilterActions, SHOW_UPDATE_FIGURE
} from "../types/visibilityFilterTypes";


export function showLogin(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_LOGIN,
    }
}

export function showSignup(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_SIGNUP,
    }
}

export function showList(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_LIST,
    }
}

export function showCreateFigure(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_CREATE_FIGURE,
    }
}

export function showProfile(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_PROFILE,
    }
}

export function showUpdateFigure(): VisibilityFilterActions {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter: SHOW_UPDATE_FIGURE,
    }
}