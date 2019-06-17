import * as React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {Ellipse, ELLIPSE} from "../typeFigures";
import MyEllipse from "./MyEllipse";
import {ChromePicker} from "react-color";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TmpFigureState} from "../types";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import {setTmpFigure} from "../redux/actions/editFigureActions";

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
            <Form>
                <Form.Group as={Col} md="10">
                    <Form.Label>Radius X: (max150)</Form.Label>
                    <Form.Control type= "number"
                                  min = "0"
                                  max="150"
                                  placeholder = "Enter radius X"
                                  onChange={(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number>150){
                                          number = 150;
                                      }
                                      ellipse = {
                                          id: undefined,
                                          type: ELLIPSE,
                                          color: tmpColor,
                                          radiusX: number,
                                          radiusY: tmpRadiusY,
                                      };
                                      dispatch(setTmpFigure(ellipse));
                                  }}
                                  autoFocus={true}/>
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Radius Y: </Form.Label>
                    <Form.Control type= "number"
                                  min = "0"
                                  max = "150"
                                  placeholder = "Enter a radius Y"
                                  onChange = {(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number>150){
                                          number = 150;
                                      }
                                      ellipse = {
                                          id: undefined,
                                          type: ELLIPSE,
                                          color: tmpColor,
                                          radiusX: tmpRadiusX,
                                          radiusY: number,
                                      };
                                      dispatch(setTmpFigure(ellipse));
                                  }}
                    />
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Color Figure</Form.Label>
                    <ChromePicker
                        color={tmpColor}
                        disableAlpha={true}
                        onChange={(color: any) => {
                            ellipse = {
                                id: undefined,
                                type: ELLIPSE,
                                color: color.hex.toString(),
                                radiusX: tmpRadiusX,
                                radiusY: tmpRadiusY,
                            };
                            dispatch(setTmpFigure(ellipse));
                        }}
                    />
                </Form.Group>
            </Form>

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