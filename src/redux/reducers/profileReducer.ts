import {ProfileState} from "../../types";
import {PROFILE_ERROR, PROFILE_REQUEST, PROFILE_SUCCESS, ProfileActions} from "../types/profileTypes";

const initialProfile: ProfileState = {
    isFetching: false,
    profile: {
        username: "",
        email: "",
        roles: [],
        personalData: {
            firstName: "",
            lastName: "",
        },
    },
    message: ""
};

export function setProfile(state = initialProfile, action: ProfileActions): ProfileState{
    switch (action.type) {
        case PROFILE_REQUEST:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                profile: {}
            });
        case PROFILE_SUCCESS:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                profile: action.profile
            });
        case PROFILE_ERROR:
            return Object.assign({}, state,{
                isFetching: action.isFetching,
                profile: {},
                message: action.message
            });
        default:
            return state;
    }
    
}