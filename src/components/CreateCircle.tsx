import * as React from 'react';
import MyCircle  from "./MyCircle";
import {Button, Col, Form} from "react-bootstrap";
import {Circle, CIRCLE} from "../typeFigures";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {ChromePicker} from 'react-color';
import '../styles/App.css';
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

interface IProps {
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

interface IState {
    color: string,
    radius: number,
}

class CreateCircle extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            color: "",
            radius: 0,
        }
    }

    render(): React.ReactNode {

        const {dispatch} = this.props;

        const figure: Circle = {
            id: undefined,
            type: CIRCLE,
            color: "",
            radius: 0,
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
                                          if (number>150){
                                              number = 150;
                                          }
                                          this.setState(
                                              {radius : number});
                                      }}
                                      autoFocus={true}/>
                    </Form.Group >
                    <Form.Group as={Col} md="10">
                        <Form.Label>Color Figure</Form.Label>
                            <ChromePicker
                                color={this.state.color}
                                disableAlpha={true}
                                onChange={(color: any) => {
                                    this.setState({color: color.hex.toString()});
                                }}
                            />
                    </Form.Group>
                </Form>

                <div>
                    <MyCircle radius={this.state.radius} color={this.state.color}/>
                    <Button variant="primary"
                            onClick={() => {
                                figure.color = this.state.color;
                                figure.radius = this.state.radius;
                                dispatch(fetchFigure(figure));
                            }}>
                        Save
                    </Button>
                </div>

            </div>
        );
    }
}

export default CreateCircle;