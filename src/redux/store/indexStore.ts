import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {auth} from "../reducers/authReducer";
import {signup} from "../reducers/signupReducer";
import {setVisibilityFilter} from "../reducers/visibilityFilterReducer";
import {setGeometricList} from "../reducers/geometricListReducer";
import {setProfile} from "../reducers/profileReducer";

const rootReducer = combineReducers({
    getAuth: auth,
    getSignup: signup,
    getVisibilityFilter: setVisibilityFilter,
    getGeometricList: setGeometricList,
    getProfile: setProfile,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {

    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

    return createStoreWithMiddleware(rootReducer);
}