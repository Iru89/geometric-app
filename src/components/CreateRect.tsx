import * as React from 'react';
import MyRect from "./MyRect";
import {Button, Col, Form} from "react-bootstrap";
import {fetchFigure} from "../redux/actions/addFigureActions";
import {Rect, RECT} from "../typeFigures";
import {ChromePicker} from "react-color";

interface IProps {
    dispatch: any
}

interface IState {
    color: string,
    width: number,
    height: number,
}

class CreateRect extends React.Component <IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            color: "",
            width: 0,
            height: 0,
        }
    }

    render(): React.ReactNode {

        const {dispatch} = this.props;

        const figure: Rect = {
            id: undefined,
            type: RECT,
            color: "",
            width: 0,
            height: 0,
        };

            return (
                <div>

                    <Form>
                        <Form.Group as={Col} md="10">
                            <Form.Label >Width: </Form.Label>
                            <Form.Control type="number"
                                          min="0"
                                          placeholder="Enter a width"
                                          onChange={(event: any) => {
                                              this.setState(
                                                  {width : parseInt(event.target.value)});
                                          }}
                                          autoFocus={true} />
                        </Form.Group>
                        <Form.Group as={Col} md="10">
                            <Form.Label>Height: </Form.Label>
                            <Form.Control type = "number"
                                          min="0"
                                          placeholder="Enter a height"
                                          onChange={(event: any) => {
                                              this.setState(
                                                  {height : parseInt(event.target.value)});
                                          }}/>
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
                        <MyRect width={this.state.width} height={this.state.height} color={this.state.color}/>
                        <Button variant="primary"
                                onClick={() => {
                                    figure.color = this.state.color;
                                    figure.height = this.state.height;
                                    figure.width = this.state.width;
                                    dispatch(fetchFigure(figure));
                                }}>
                            Save
                        </Button>
                    </div>

                </div>
            );
        }


}

export default CreateRect