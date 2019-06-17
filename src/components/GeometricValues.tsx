import * as React from 'react';
import CreateCircle from "./createFigures/CreateCircle";
import CreateRect from "./createFigures/CreateRect";
import CreateRegularPolygon from "./createFigures/CreateRegularPolygon";
import CreateEllipse from "./createFigures/CreateEllipse";
import {CIRCLE, ELLIPSE, RECT, REGULARPOLYGON} from "../typeFigures";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import {TmpFigureState} from "../types";

interface IProps {
    tmpFigure: TmpFigureState,
}

const CreateGeometricValues: React.FunctionComponent<IProps> = (props:IProps) => {

        const {tmpFigure} = props;

        switch (tmpFigure.selectType) {
            case CIRCLE:
                return(
                    <div>
                        <CreateCircle/>
                    </div>
                );
            case RECT:
                return(
                    <div>
                        <CreateRect/>
                    </div>
                );
            case REGULARPOLYGON:
                return(
                    <div>
                        <CreateRegularPolygon/>
                    </div>
                );
            case ELLIPSE:
                return(
                    <div>
                        <CreateEllipse/>
                    </div>
                );
            default:
                return null;
        }
};
const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(CreateGeometricValues);