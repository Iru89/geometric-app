import * as React from "react";
import Login from "./Login";

import {AuthState, FilterState} from "../types";
import {
    SHOW_CREATE_FIGURE,
    SHOW_LIST,
    SHOW_LOGIN,
    SHOW_PROFILE,
    SHOW_SIGNUP, SHOW_UPDATE_FIGURE
} from "../redux/types/visibilityFilterTypes";
import FigureList from "./FigureList";
import CreateFigure from "./CreateFigure";
import SignUpFormContainer from "./MySignUpFormik";
import Profile from "./Profile";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import UpdateFigure from "./UpdateFigure";


interface IProps{
    authState: AuthState,
    visibilityFilterState: FilterState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const Main: React.FunctionComponent<IProps> = (props: IProps) => {

    const {authState} = props;
    const {visibilityFilter} = props.visibilityFilterState;

    switch (visibilityFilter) {
        case SHOW_LOGIN:

            return (
                <div>
                    <hr/>
                    {!authState.isAuthenticated &&
                    <Login/>
                    }
                    <hr/>
                </div>
            );
        case SHOW_SIGNUP:
            return (
                <div>
                    <hr/>
                    {!authState.isAuthenticated &&
                       <SignUpFormContainer/>
                    }
                    <hr/>
                </div>
            );
        case SHOW_CREATE_FIGURE:
            return(
                <div>
                    <hr/>
                    <CreateFigure/>
                    <hr/>
                </div>
            );
        case SHOW_LIST:
            return(
                <div>
                    <hr/>
                    <FigureList/>
                    <hr/>
                </div>
            );
        case SHOW_UPDATE_FIGURE:
            return(
                <div>
                    <hr/>
                    <UpdateFigure/>
                    <hr/>
                </div>
            );
        case SHOW_PROFILE:
            return(
                <div>
                    <hr/>
                    <Profile/>
                    <hr/>
                </div>
            );
        default:
            return null;
    }
};
const mapStateToProps = (state: AppState) => ({
    authState: state.getAuth,
    visibilityFilterState: state.getVisibilityFilter
});

export default connect(mapStateToProps)(Main);