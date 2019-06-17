import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import {Circle, CIRCLE} from "../../typeFigures";
import {Button} from "react-bootstrap";
import * as React from "react";
import MyCircle from "../myFigures/MyCircle";
import {fetchUpdateFigure} from "../../redux/actions/updateFigureActions";
import FormEditCircle from "../formFigures/FormEditCircle";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}


const UpdateCircle: React.FunctionComponent <IProps> = (props: IProps) =>{

    const {tmpFigure, dispatch} = props;

    let tmpRadius = 0;
    if(tmpFigure.figure.type === CIRCLE && tmpFigure.figure.radius !== null){
        tmpRadius = tmpFigure.figure.radius;
    }

    let tmpColor = "";
    if(tmpFigure.figure.color !== ""){
        tmpColor = tmpFigure.figure.color;
    }

    let circle: Circle = {
        id: tmpFigure.figure.id,
        type: CIRCLE,
        color: tmpColor,
        radius: tmpRadius,
    };

    return (
        <div className="Color-center">
            <FormEditCircle/>
            <div>
                <MyCircle radius={circle.radius} color={circle.color}/>
                <Button variant="primary"
                        onClick={() => {
                            dispatch(fetchUpdateFigure(circle));
                        }}>
                    Update
                </Button>
            </div>

        </div>
    );

};

const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(UpdateCircle);