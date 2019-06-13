import React from 'react';
import * as yup from 'yup';
import {Button, Col, Form} from "react-bootstrap";
import {Formik, FormikProps} from "formik";
import {SignupState, SignupUser} from "../types";
import {signupUser} from "../redux/actions/signupActions";
import {connect} from "react-redux";
import {AppState} from "../redux/store/indexStore";

interface IProps {
    dispatch: any,
    signupState: SignupState,
}

const initialValues: SignupUser = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
};

const SignUpFormContainer: React.FunctionComponent<IProps> = (props: IProps) => {

    const {signupMessage} = props.signupState;
    const {dispatch} = props;

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validate(getYupValidationSchema)}
                onSubmit={(values: SignupUser, { setSubmitting }: any) => {
                    dispatch(signupUser(values));
                    setSubmitting(false);
                }}
                render={SignUpForm}
            />
            {signupMessage && <Form.Text>{signupMessage}</Form.Text> }
        </div>
    );
};
const mapStateToProps = (state: AppState) => ({
   signupState: state.getSignup
});
export default connect (mapStateToProps)(SignUpFormContainer);

function SignUpForm (props: FormikProps<SignupUser>): any {

    const { touched, errors, isSubmitting,  handleChange, handleSubmit, handleBlur,  values } = props;

    return (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationFormikUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a username"
                                aria-describedby="inputGroupPrepend"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.username}
                            />
                            {touched.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationFormikPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter a password"
                                aria-describedby="inputGroupPrepend"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.password}
                            />
                            {touched.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationFormikEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter a email"
                                aria-describedby="inputGroupPrepend"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.email}
                            />
                            {touched.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationFormikFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your first name"
                                aria-describedby="inputGroupPrepend"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.firstName}
                            />
                            {touched.firstName && <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationFormikLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your last name"
                                aria-describedby="inputGroupPrepend"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.lastName}
                            />
                            {touched.lastName && <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>}
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" disabled={isSubmitting}>Submit form</Button>
                </Form>
    );
}

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 10;

function getYupValidationSchema(values: SignupUser) {
    return yup.object().shape({
        username: yup.string()
            .required('Username is required'),
        email: yup.string()
            .email('E-mail is not valid!')
            .required('E-mail is required!'),
        password: yup.string()
            .min(MIN_PASSWORD_LENGTH, `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`)
            .max(MAX_PASSWORD_LENGTH, `Password has to be longer than ${MAX_PASSWORD_LENGTH} characters!`)
            .required('Password is required!'),
        firstName: yup.string()
            .required('First name is required'),
        lastName: yup.string()
            .required('Last name is required')
    })
}

function validate(getValidationSchema: any) {
    return (values: any) => {
        const validationSchema = getValidationSchema(values);
        try {
            validationSchema.validateSync(values, { abortEarly: false });
            return {}
        } catch (error) {
            return getErrorsFromValidationError(error);
        }
    }
}

function getErrorsFromValidationError(validationError: any) {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors: any, error: any) => {
        return {
            ...errors,
            [error.path]: error.errors[FIRST_ERROR],
        }
    }, {});
}