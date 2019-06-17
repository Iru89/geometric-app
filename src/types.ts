//STATE
import {Figure} from "./typeFigures";

export interface AuthState {
    isFetching: boolean,
    isAuthenticated: boolean,
    loginMessage: string,
}

export interface SignupState {
    isFetching: boolean,
    signupMessage: string,
}

export interface FilterState {
    visibilityFilter: string,
}

export interface TmpFigureState {
    selectType: string
    figure: Figure,
}

export interface ListFiguresState {
    isFetching: boolean,
    listFigures: Figure[],
}

export interface ProfileState {
    isFetching: boolean,
    profile: IProfile,
    message: string,
}

interface IPersonalData {
    firstName: string,
    lastName: string,
}

export interface IProfile {
    username: string,
    email: string,
    roles: string[]
    personalData: IPersonalData
}
//REQUEST
export interface Credentials {
    usernameOrEmail: string,
    password: string,
}

export interface SignupUser {
    "username": string,
    "email": string,
    "password": string,
    "firstName": string,
    "lastName": string,
}
//RESPONSE
export interface IJwtResponse {
    tokenType: string,
    access_token: string,
    refresh_token: string,
}