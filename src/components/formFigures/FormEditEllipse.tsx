import {Ellipse, ELLIPSE} from "../../typeFigures";
import {Form, Col} from "react-bootstrap";
import {setTmpFigure} from "../../redux/actions/editFigureActions";
import {ChromePicker} from "react-color";
import * as React from "react";
import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const FormEditEllipse: React.FunctionComponent <IProps> = (props: IProps) => {

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
        id: tmpFigure.figure.id,
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
                                          id: tmpFigure.figure.id,
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
                                          id: tmpFigure.figure.id,
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
                                id: tmpFigure.figure.id,
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
        </div>
    );
};

const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(FormEditEllipse);