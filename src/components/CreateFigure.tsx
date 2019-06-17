import * as React from 'react';
import {Col, Form} from "react-bootstrap";
import GeometricValues from "./GeometricValues";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TmpFigureState} from "../types";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import {setType} from "../redux/actions/editFigureActions";

interface IProps {
    tmpFigure: TmpFigureState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const CreateFigure: React.FunctionComponent <IProps> = (props: IProps) => {
    const {dispatch} = props;

    return (
        <div>
            <div>
                <Form>
                    <label>Select the type of Figure</label>
                    <Form.Group as={Col} md="10">
                        <Form.Control as="select"
                                      onChange={(event: any) => dispatch(setType(event.target.value))}>
                            <option> </option>
                            {/*<option>RECT</option>*/}
                            <option>CIRCLE</option>
                            <option>ELLIPSE</option>
                            <option>REGULARPOLYGON</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <GeometricValues/>
        </div>
    );
};

const mapStateToProps= (state: AppState) => ({
    tmpFigure: state.getTmpFigure,
});

export default connect (mapStateToProps)(CreateFigure);