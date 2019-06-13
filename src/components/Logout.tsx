import React from 'react'
import {Button} from "react-bootstrap";

interface IProps {
    onLogoutClick: any,
}

class Logout extends React.Component<IProps> {

    render() {
        const { onLogoutClick } = this.props;
        return (
            <Button variant="primary" onClick={() => onLogoutClick()}>
                Logout
            </Button>
        )
    }
}

export default Logout;