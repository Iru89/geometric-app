import * as React from 'react';
import {Form} from "react-bootstrap";
import {ProfileState} from "../types";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";

interface IProps {
    profileState: ProfileState,
}

const Profile: React.FunctionComponent<IProps> = (props: IProps) => {

    const {profile} = props.profileState;
    const {personalData} = props.profileState.profile;

    return (
        <div>
            <Form>
                <h2>Profile</h2>
                <Form.Group>
                    <Form.Label >Username: </Form.Label>
                    <Form.Control type="text"
                                  placeholder={profile.username}
                                  autoFocus={true} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email"
                                  placeholder={profile.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text"
                                  placeholder={personalData.firstName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text"
                                  placeholder={personalData.lastName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your roles: </Form.Label>
                    <Form.Control type="text"
                                  placeholder={profile.roles.join(', ')}/>
                </Form.Group>
            </Form>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    profileState: state.getProfile
});
export default connect(mapStateToProps)(Profile);