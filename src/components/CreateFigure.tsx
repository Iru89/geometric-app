import * as React from 'react';
import {Col, Form} from "react-bootstrap";
import GeometricValues from "./GeometricValues";

interface IState {
    type: string,
}

interface IProps {
    dispatch: any,
}

class CreateFigure extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            type: ""
        }
    }

    render(): React.ReactNode {

        const {dispatch} = this.props;

        return (
            <div>
                <div>
                    <Form>
                        <label>Select the type of Figure</label>
                        <Form.Group as={Col} md="10">
                            <Form.Control as="select"
                                          onChange={(event: any) => this.setState({type: event.target.value})}>
                                <option> </option>
                                {/*<option>RECT</option>*/}
                                <option>CIRCLE</option>
                                <option>ELLIPSE</option>
                                <option>REGULARPOLYGON</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <GeometricValues type={this.state.type} dispatch={dispatch}/>
            </div>
        );
    }

}
export default CreateFigure