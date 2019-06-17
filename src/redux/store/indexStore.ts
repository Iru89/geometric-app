import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {setAuth} from "../reducers/authReducer";
import {setSignup} from "../reducers/signupReducer";
import {setVisibilityFilter} from "../reducers/visibilityFilterReducer";
import {setGeometricList} from "../reducers/geometricListReducer";
import {setProfile} from "../reducers/profileReducer";
import {setEditFigure} from "../reducers/editFigureReducer";

const rootReducer = combineReducers({
    getAuth: setAuth,
    getSignup: setSignup,
    getVisibilityFilter: setVisibilityFilter,
    getTmpFigure: setEditFigure,
    getGeometricList: setGeometricList,
    getProfile: setProfile,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {

    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

    return createStoreWithMiddleware(rootReducer);
}