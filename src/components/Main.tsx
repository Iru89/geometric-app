import * as React from "react";
import Login from "./Login";
import {AuthState, ListFiguresState, ProfileState, SignupState} from "../types";
import {
    SHOW_CREATE_FIGURE,
    SHOW_LIST,
    SHOW_LOGIN,
    SHOW_PROFILE,
    SHOW_SIGNUP
} from "../redux/types/visibilityFilterTypes";
import FigureList from "./FigureList";
import CreateFigure from "./CreateFigure";
import SignUpFormContainer from "./MySignUpFormik";
import Profile from "./Profile";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";


interface IProps{
    visibilityFilter: string,
    authState: AuthState,
    signupState: SignupState,
    geometricListState: ListFiguresState,
    profileState: ProfileState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const Main: React.FunctionComponent<IProps> = (props: IProps) => {

    const {dispatch, authState, signupState, visibilityFilter, geometricListState, profileState} = props;

    switch (visibilityFilter) {
        case SHOW_LOGIN:
            return (
                <div>
                    <hr/>
                    {!authState.isAuthenticated &&
                    <Login authState={authState}
                           dispatch={dispatch}/>
                    }
                    <hr/>
                </div>
            );
        case SHOW_SIGNUP:
            return (
                <div>
                    <hr/>
                    {!authState.isAuthenticated &&
                       <SignUpFormContainer signupState={signupState}
                                            dispatch={dispatch}/>
                    }
                    <hr/>
                </div>
            );
        case SHOW_CREATE_FIGURE:
            return(
                <div>
                    <hr/>
                    <CreateFigure dispatch={dispatch}/>
                    <hr/>
                </div>
            );
        case SHOW_LIST:
            return(
                <div>
                    <hr/>
                    <FigureList geometricListState={geometricListState}
                                dispatch={dispatch}/>
                    <hr/>
                </div>
            );
            case SHOW_PROFILE:
                return(
                    <div>
                        <hr/>
                        <Profile profileState={profileState}/>
                        <hr/>
                    </div>
                );
        default:
            return null;
    }
};
export default Main;