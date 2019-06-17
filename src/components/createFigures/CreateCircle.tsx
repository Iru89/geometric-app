import * as React from 'react';
import MyCircle  from "../myFigures/MyCircle";
import {Button} from "react-bootstrap";
import {Circle, CIRCLE} from "../../typeFigures";
import {fetchFigure} from "../../redux/actions/addFigureActions";
import '../../styles/App.css';
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import {TmpFigureState} from "../../types";
import FormEditCircle from "../formFigures/FormEditCircle";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const CreateCircle: React.FunctionComponent <IProps> = (props: IProps) => {

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
        id: undefined,
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
                            dispatch(fetchFigure(circle));
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

export default connect (mapStateToProps)(CreateCircle);