import * as React from 'react';
import MyRegularPolygon  from "../myFigures/MyRegularPolygon";
import {Button} from "react-bootstrap";
import {fetchFigure} from "../../redux/actions/addFigureActions";
import {REGULARPOLYGON, RegularPolygon} from "../../typeFigures";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import FormEditRegularPolygon from "../formFigures/FormEditRegularPolygon";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const CreateRegularPolygon: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpSides = 0;
    let tmpRadius = 0;
    if(tmpFigure.figure.type === REGULARPOLYGON && tmpFigure.figure.sides !== null && tmpFigure.figure.radius !== null){
        tmpSides = tmpFigure.figure.sides;
        tmpRadius = tmpFigure.figure.radius;
    }

    let tmpColor = "";
    if(tmpFigure.figure.color !== ""){
        tmpColor = tmpFigure.figure.color;
    }

    let regularPolygon: RegularPolygon = {
        id: undefined,
        type: REGULARPOLYGON,
        color: tmpColor,
        sides: tmpSides,
        radius: tmpRadius,
    };

    return (
        <div>
            <FormEditRegularPolygon/>
            <div>
                <MyRegularPolygon sides={regularPolygon.sides}
                                  radius={regularPolygon.radius}
                                  color={regularPolygon.color}/>
                <Button variant="primary"
                        onClick={() => {
                            dispatch(fetchFigure(regularPolygon));
                        }}>
                    Save
                </Button>
            </div>

        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(CreateRegularPolygon);