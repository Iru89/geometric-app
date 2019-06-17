import {TmpFigureState} from "../../types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import * as React from "react";
import {Rect, RECT} from "../../typeFigures";
import {Form, Col} from "react-bootstrap";
import {setTmpFigure} from "../../redux/actions/editFigureActions";
import {ChromePicker} from "react-color";
import {AppState} from "../../redux/store/indexStore";
import {connect} from "react-redux";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const FormEditRect: React.FunctionComponent <IProps> = (props: IProps) => {

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

            <Form>
                <Form.Group as={Col} md="10">
                    <Form.Label>Width: (max 150)</Form.Label>
                    <Form.Control type="number"
                                  min="0"
                                  max="150"
                                  placeholder="Enter a width"
                                  onChange={(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number > 150) {
                                          number = 150;
                                      }
                                      rect = {
                                          id: tmpFigure.figure.id,
                                          type: RECT,
                                          color: tmpColor,
                                          width: number,
                                          height: tmpHeight,
                                      };
                                      dispatch(setTmpFigure(rect));
                                  }}
                                  autoFocus={true}/>
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Height: (max 150)</Form.Label>
                    <Form.Control type="number"
                                  min="0"
                                  max="150"
                                  placeholder="Enter a height"
                                  onChange={(event: any) => {
                                      let number = parseInt(event.target.value);
                                      if (number > 150) {
                                          number = 150;
                                      }
                                      rect = {
                                          id: tmpFigure.figure.id,
                                          type: RECT,
                                          color: tmpColor,
                                          width: tmpWidth,
                                          height: number,
                                      };
                                      dispatch(setTmpFigure(rect));
                                  }}/>
                </Form.Group>
                <Form.Group as={Col} md="10">
                    <Form.Label>Color Figure</Form.Label>
                    <ChromePicker
                        color={tmpColor}
                        disableAlpha={true}
                        onChange={(color: any) => {
                            rect = {
                                id: tmpFigure.figure.id,
                                type: RECT,
                                color: color.hex.toString(),
                                width: tmpWidth,
                                height: tmpHeight,
                            };
                            dispatch(setTmpFigure(rect));
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

export default connect (mapStateToProps)(FormEditRect);