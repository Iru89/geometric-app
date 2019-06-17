import * as React from 'react';
import MyRect from "../myFigures/MyRect";
import {Button} from "react-bootstrap";
import {fetchFigure} from "../../redux/actions/addFigureActions";
import {Rect, RECT} from "../../typeFigures";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TmpFigureState} from "../../types";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import FormEditRect from "../formFigures/FormEditRect";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const CreateRect: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpWidth = 0;
    let tmpHeight = 0;
    if(tmpFigure.figure.type === RECT && tmpFigure.figure.width !== null && tmpFigure.figure.height !== null){
        tmpWidth = tmpFigure.figure.width;
        tmpHeight = tmpFigure.figure.height;
    }

    let tmpColor = "";
    if(tmpFigure.figure.color !== ""){
        tmpColor = tmpFigure.figure.color;
    }

    let rect: Rect = {
        id: undefined,
        type: RECT,
        color: tmpColor,
        width: tmpWidth,
        height: tmpHeight,
    };

    return (
        <div>
            <FormEditRect/>
            <div>
                <MyRect width={rect.width} height={rect.height} color={rect.color}/>
                <Button variant="primary"
                        onClick={() => {
                            dispatch(fetchFigure(rect));
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

export default connect (mapStateToProps)(CreateRect);