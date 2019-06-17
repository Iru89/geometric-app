import * as React from 'react';
import MyRegularPolygon  from "./MyRegularPolygon";
import {Button, Col, Form} from "react-bootstrap";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {REGULARPOLYGON, RegularPolygon} from "../typeFigures";
import {ChromePicker} from "react-color";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import {TmpFigureState} from "../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {setTmpFigure} from "../redux/actions/editFigureActions";

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

            <Form>
                <Form.Group as={Col} md="10">
                    <Form.Label>Radius: (max 150)</Form.Label>
                    <Form.Control type="number"
                                  min="0"
                                  max="150"
                                  placeholder="Enter a radius"
                                  onChange={(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number>150){
                                          number = 150;
                                      }
                                      regularPolygon = {
                                          id: undefined,
                                          type: REGULARPOLYGON,
                                          color: tmpColor,
                                          sides: tmpSides,
                                          radius: number,
                                      };
                                      dispatch(setTmpFigure(regularPolygon));
                                  }}
                                  />
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Sides: </Form.Label>
                    <Form.Control type="number"
                                  min="0"
                                  placeholder="Enter sides"
                                  onChange={(event: any) => {
                                      regularPolygon = {
                                          id: undefined,
                                          type: REGULARPOLYGON,
                                          color: tmpColor,
                                          sides: parseInt(event.target.value),
                                          radius: tmpRadius,
                                      };
                                      dispatch(setTmpFigure(regularPolygon));
                                  }}
                                  autoFocus={true}/>
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Color Figure</Form.Label>
                    <ChromePicker
                        color={tmpColor}
                        disableAlpha={true}
                        onChange={(color: any) => {
                            regularPolygon = {
                                id: undefined,
                                type: REGULARPOLYGON,
                                color: color.hex.toString(),
                                sides: tmpSides,
                                radius: tmpRadius,
                            };
                            dispatch(setTmpFigure(regularPolygon));
                        }}
                    />
                </Form.Group>
            </Form>

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

const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(CreateRegularPolygon);