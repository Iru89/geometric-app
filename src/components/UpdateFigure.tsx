import {TmpFigureState} from "../types";
import * as React from "react";
import {CIRCLE, ELLIPSE, RECT, REGULARPOLYGON} from "../typeFigures";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import UpdateCircle from "./updateFigures/UpdateCircle";
import UpdateEllipse from "./updateFigures/UpdateEllipse";
import UpdateRegularPolygon from "./updateFigures/UpdateRegularPolygon";
import UpdateRect from "./updateFigures/UpdateRect";

interface IProps {
    tmpFigure: TmpFigureState,
}

const UpdateFigure: React.FunctionComponent<IProps> = (props:IProps) => {

    const {tmpFigure} = props;

    switch (tmpFigure.selectType) {
        case CIRCLE:
            return(
                <div>
                    <UpdateCircle/>
                </div>
            );
        case RECT:
            return(
                <div>
                    <UpdateRect/>
                </div>
            );
        case REGULARPOLYGON:
            return(
                <div>
                    <UpdateRegularPolygon/>
                </div>
            );
        case ELLIPSE:
            return(
                <div>
                    <UpdateEllipse/>
                </div>
            );
        default:
            return null;
    }
};
const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(UpdateFigure);