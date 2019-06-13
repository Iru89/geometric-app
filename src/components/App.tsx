import * as React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux'
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import MenuApp from "./MenuApp";
import {AppState} from "../redux/store/indexStore";
import {Dispatch} from "redux";
import {AuthState, FilterState, ListFiguresState, ProfileState, SignupState} from "../types";

interface IAppProps {
  authState: AuthState,
  signupState: SignupState,
  visibilityFilterState: FilterState,
  geometricListState: ListFiguresState,
  porfileState: ProfileState,
  dispatch: Dispatch,
}

const App: React.FunctionComponent<IAppProps> = (props:IAppProps) => {

      const {dispatch, authState, signupState, visibilityFilterState, geometricListState, porfileState } = props;
      const appName: string = "GeometricApp";

      return (
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Header name={appName} />
              </div>

              <div className="App-main">

                  <MenuApp isAuthenticated={authState.isAuthenticated}
                       dispatch={dispatch}/>

                  <Main authState={authState}
                        signupState={signupState}
                        visibilityFilter={visibilityFilterState.visibilityFilter}
                        geometricListState={geometricListState}
                        profileState={porfileState}
                        dispatch={dispatch}/>

              </div>
              <div className="App-footer">
                  <Footer/>
              </div>

          </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    authState: state.getAuth,
    signupState: state.getSignup,
    visibilityFilterState: state.getVisibilityFilter,
    geometricListState: state.getGeometricList,
    porfileState: state.getProfile,
});

export default connect(mapStateToProps)(App)