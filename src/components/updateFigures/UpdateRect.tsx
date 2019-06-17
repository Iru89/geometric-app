import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import * as React from "react";
import {Rect, RECT} from "../../typeFigures";
import FormEditRect from "../formFigures/FormEditRect";
import {Button} from "react-bootstrap";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import MyRect from "../myFigures/MyRect";
import {fetchUpdateFigure} from "../../redux/actions/updateFigureActions";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const UpdateRect: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpWidth = 0;
    let tmpHeight = 0;
    if (tmpFigure.figure.type === RECT && tmpFigure.figure.width !== null && tmpFigure.figure.height !== null) {
        tmpWidth = tmpFigure.figure.width;
        tmpHeight = tmpFigure.figure.height;
    }

    let tmpColor = "";
    if (tmpFigure.figure.color !== "") {
        tmpColor = tmpFigure.figure.color;
    }


    let rect: Rect = {
        id: tmpFigure.figure.id,
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
                            dispatch(fetchUpdateFigure(rect));
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

export default connect (mapStateToProps)(UpdateRect);