import * as React from 'react';
import MyRegularPolygon  from "./MyRegularPolygon";
import {Button, Col, Form} from "react-bootstrap";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {REGULARPOLYGON, RegularPolygon} from "../typeFigures";
import {ChromePicker} from "react-color";

interface IProps {
    dispatch: any,
}

interface IState {
    color: string,
    sides: number,
    radius: number,
}

class CreateRegularPolygon extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            color: "",
            sides: 0,
            radius: 0,
        }
    }

    render(): React.ReactNode {

        const {dispatch} = this.props;

        const figure: RegularPolygon = {
            id: undefined,
            type: REGULARPOLYGON,
            color: "",
            sides: 3,
            radius: 0,
        };

        return (
            <div>

                <Form>
                    <Form.Group as={Col} md="10">
                        <Form.Label>Sides: </Form.Label>
                        <Form.Control type="number"
                                      min="0"
                                      placeholder="Enter sides"
                                      onChange={(event: any) => {
                                          this.setState(
                                              {sides : parseInt(event.target.value)});
                                      }}
                                      autoFocus={true}/>
                    </Form.Group>
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
                    <MyRegularPolygon sides={this.state.sides}
                                      radius={this.state.radius}
                                      color={this.state.color}/>
                    <Button variant="primary"
                            onClick={() => {
                                figure.color = this.state.color;
                                figure.sides = this.state.sides;
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

export default CreateRegularPolygon;