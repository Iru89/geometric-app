import * as React from 'react';
import {AuthState, Credentials} from "../types";
import {Button, Form} from "react-bootstrap";
import {loginUser} from "../redux/actions/authActions";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";

interface IProps {
    authState: AuthState,
    dispatch: ThunkDispatch<any, any, AnyAction>,
}

const Login: React.FunctionComponent<IProps> = (props: IProps) => {

    const jsonLoginRequest: Credentials = {
        usernameOrEmail: "",
        password: "",
    };

    const {dispatch} = props;
    const {loginMessage} = props.authState;

    return (
        <div>
            <Form>
                <h2>Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username or Email:</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter username or email"
                                  onChange={(event: any) => jsonLoginRequest.usernameOrEmail = event.target.value}
                                  autoFocus={true}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password"
                                  placeholder="Enter password"
                                  onChange={(event: any) => jsonLoginRequest.password = event.target.value}/>
                </Form.Group>
                <Button variant="primary" onClick={() => dispatch(loginUser(jsonLoginRequest))}>
                    Login
                </Button>
                {loginMessage && <Form.Text>{loginMessage}</Form.Text> }
            </Form>
        </div>
    );

};
const mapStateToProps = (state: AppState) => ({
   authState: state.getAuth
});

export default connect (mapStateToProps)(Login);