import * as React from 'react';
import CreateCircle from "./CreateCircle";
import CreateRect from "./CreateRect";
import {CIRCLE, ELLIPSE, RECT, REGULARPOLYGON} from "../typeFigures";
import CreateRegularPolygon from "./CreateRegularPolygon";
import CreateEllipse from "./CreateEllipse";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

interface IProps {
    type: string,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const GeometricValues: React.FunctionComponent<IProps> = (props:IProps) => {

        const {type, dispatch} = props;

        switch (type) {
            case CIRCLE:
                return(
                    <div>
                        <CreateCircle dispatch={dispatch}/>
                    </div>
                );
            case RECT:
                return(
                    <div>
                        <CreateRect dispatch={dispatch}/>
                    </div>
                );
            case REGULARPOLYGON:
                return(
                    <div>
                        <CreateRegularPolygon dispatch={dispatch}/>
                    </div>
                );
            case ELLIPSE:
                return(
                    <div>
                        <CreateEllipse dispatch={dispatch}/>
                    </div>
                );
            default:
                return null;
        }
};

export default GeometricValues;