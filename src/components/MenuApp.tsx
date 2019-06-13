import * as React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {showCreateFigure, showList, showLogin, showProfile, showSignup} from "../redux/actions/visibilityFilterActions";
import Logout from "./Logout";
import {logoutUser} from "../redux/actions/authActions";

interface IProps {
    isAuthenticated: boolean,
    dispatch: any,
}

const MenuApp: React.FunctionComponent <IProps>= (props:IProps) => {
    const {dispatch, isAuthenticated} = props;

    if(isAuthenticated){
        return(
            <div>
                <Navbar>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Button variant="primary" onClick={() => dispatch(showCreateFigure())}>Create Figure</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button variant="primary" onClick={() => dispatch(showList())}>List Figures</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Logout onLogoutClick={() => dispatch(logoutUser())}/>
                            </Nav.Link>
                            <Nav.Link>
                                <Button variant="primary" onClick={() => {
                                    // dispatch(getProfile());
                                    dispatch(showProfile())}
                                }>Profile</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }else{
        return(
            <div>
                <Navbar>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>
                                <Button variant="primary" onClick={() => dispatch(showLogin())}>Login</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button variant="primary" onClick={() => dispatch(showSignup())}>Signup</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MenuApp;