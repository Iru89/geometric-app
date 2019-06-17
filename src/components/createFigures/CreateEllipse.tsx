import * as React from 'react';
import {Button} from "react-bootstrap";
import {fetchFigure} from "../../redux/actions/addFigureActions";
import {Ellipse, ELLIPSE} from "../../typeFigures";
import MyEllipse from "../myFigures/MyEllipse";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TmpFigureState} from "../../types";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import FormEditEllipse from "../formFigures/FormEditEllipse";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const CreateEllipse: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpRadiusX = 0;
    let tmpRadiusY = 0;
    if(tmpFigure.figure.type === ELLIPSE && tmpFigure.figure.radiusX !== null && tmpFigure.figure.radiusY !== null){
        tmpRadiusX = tmpFigure.figure.radiusX;
        tmpRadiusY = tmpFigure.figure.radiusY;
    }

    let tmpColor = "";
    if(tmpFigure.figure.color !== ""){
        tmpColor = tmpFigure.figure.color;
    }

    let ellipse: Ellipse = {
        id: undefined,
        type: ELLIPSE,
        color: tmpColor,
        radiusX: tmpRadiusX,
        radiusY: tmpRadiusY,
    };

    return (
        <div>
            <FormEditEllipse/>
            <div>
                <MyEllipse radiusX={ellipse.radiusX}
                           radiusY={ellipse.radiusY}
                           color={ellipse.color}/>
                <Button variant="primary"
                        onClick={() => {
                            dispatch(fetchFigure(ellipse));
                        }}>
                    Save
                </Button>
            </div>

        </div>
    );
};
const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(CreateEllipse);