import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {Col, Form} from "react-bootstrap";
import {Circle, CIRCLE} from "../../typeFigures";
import {setTmpFigure} from "../../redux/actions/editFigureActions";
import {ChromePicker} from "react-color";
import * as React from "react";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const FormEditCircle: React.FunctionComponent <IProps> = (props: IProps) => {

    const {tmpFigure, dispatch} = props;

    let tmpRadius = 0;
    if (tmpFigure.figure.type === CIRCLE && tmpFigure.figure.radius !== null) {
        tmpRadius = tmpFigure.figure.radius;
    }

    let tmpColor = "";
    if (tmpFigure.figure.color !== "") {
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
            <Form>
                <Form.Group as={Col} md="10">
                    <Form.Label>Radius: (max 150)</Form.Label>
                    <Form.Control type="number"
                                  min="0"
                                  max="150"
                                  placeholder="Enter a radius"
                                  onChange={(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number > 150) {
                                          number = 150;
                                      }
                                      circle = {
                                          id: tmpFigure.figure.id,
                                          type: CIRCLE,
                                          color: tmpFigure.figure.color,
                                          radius: number,
                                      };
                                      dispatch(setTmpFigure(circle));
                                  }}
                                  autoFocus={true}/>
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Color Figure</Form.Label>
                    <ChromePicker
                        color={tmpColor}
                        disableAlpha={true}
                        onChange={(color: any) => {
                            circle = {
                                id: tmpFigure.figure.id,
                                type: CIRCLE,
                                color: color.hex.toString(),
                                radius: tmpRadius
                            };
                            dispatch(setTmpFigure(circle))
                        }}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(FormEditCircle);