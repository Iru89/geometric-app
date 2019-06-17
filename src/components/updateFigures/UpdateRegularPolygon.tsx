import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import * as React from "react";
import {RegularPolygon, REGULARPOLYGON} from "../../typeFigures";
import FormEditRegularPolygon from "../formFigures/FormEditRegularPolygon";
import {Button} from "react-bootstrap";
    import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";
import MyRegularPolygon from "../myFigures/MyRegularPolygon";
import {fetchUpdateFigure} from "../../redux/actions/updateFigureActions";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const UpdateRegularPolygon: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpSides = 0;
    let tmpRadius = 0;
    if (tmpFigure.figure.type === REGULARPOLYGON && tmpFigure.figure.sides !== null && tmpFigure.figure.radius !== null) {
        tmpSides = tmpFigure.figure.sides;
        tmpRadius = tmpFigure.figure.radius;
    }

    let tmpColor = "";
    if (tmpFigure.figure.color !== "") {
        tmpColor = tmpFigure.figure.color;
    }

    let regularPolygon: RegularPolygon = {
        id: tmpFigure.figure.id,
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
                            dispatch(fetchUpdateFigure(regularPolygon));
                        }}>
                    Update
                </Button>
            </div>

        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(UpdateRegularPolygon);
