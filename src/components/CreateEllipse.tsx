import * as React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {Ellipse, ELLIPSE} from "../typeFigures";
import MyEllipse from "./MyEllipse";
import {ChromePicker} from "react-color";

interface IProps {
    dispatch: any,
}

interface IState {
    color: string,
    radiusX: number,
    radiusY: number,
}

class CreateEllipse extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            color: "",
            radiusX: 0,
            radiusY: 0,
        }
    }

    render(): React.ReactNode {

        const {dispatch} = this.props;

        const figure: Ellipse = {
            id: undefined,
            type: ELLIPSE,
            color: "",
            radiusX: 0,
            radiusY: 0,
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
                                          this.setState(
                                              {radiusX : number});
                                      }}
                                      autoFocus={true}/>
                    </Form.Group>
                    <Form.Group as={Col} md="10">
                        <Form.Label>Radius Y: </Form.Label>
                        <Form.Control type= "number"
                                      min = "0"
                                      placeholder = "Enter a radius Y"
                                      onChange = {(event: any) => {
                                          this.setState(
                                              {radiusY : parseInt(event.target.value)});
                                      }}
                        />
                    </Form.Group>
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
                    <MyEllipse radiusX={this.state.radiusX}
                               radiusY={this.state.radiusY}
                               color={this.state.color}/>
                    <Button variant="primary"
                            onClick={() => {
                                figure.color = this.state.color;
                                figure.radiusX = this.state.radiusX;
                                figure.radiusY = this.state.radiusY;
                                dispatch(fetchFigure(figure));
                            }}>
                        Save
                    </Button>
                </div>

            </div>
        );
    }

}

export default CreateEllipse;