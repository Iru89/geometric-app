import jwt from "jsonwebtoken";
import {fetchRefreshTokens, logoutUser} from "./actions/authActions";

export function isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('access_token') || null;

    if (accessToken !== null) {
        const decodedAccessToken: any = jwt.decode(accessToken, {complete: true});
        const dateNowInSeg = Date.now() / 1000;

        if (decodedAccessToken.payload.exp > dateNowInSeg) {
            return true;
        }
    }
    return false;
}

export function isRefreshTokenValid(): boolean {
    const dateNowInSeg = Date.now() / 1000;
    const refreshToken = localStorage.getItem('refresh_token') || null;

    if (refreshToken !== null) {
        const decodedRefreshToken: any = jwt.decode(refreshToken, {complete: true});

        if (decodedRefreshToken.payload.exp > dateNowInSeg) {
            return true;
        }
    }
    return false;
}

export function userId(): string {
    const accessToken = localStorage.getItem('access_token') || null;

    if(accessToken !== null) {
        const decodedJwt: any = jwt.decode(accessToken, {complete: true});
        if (decodedJwt !== null) {
            return decodedJwt.payload.userId;
        }
    }
    return "";
}

export function username(): string {
    const accessToken = localStorage.getItem('access_token') || null;

    if(accessToken !== null) {
        const decodedJwt: any = jwt.decode(accessToken, {complete: true});
        if (decodedJwt !== null) {
            return decodedJwt.payload.username;
        }
    }
    return "";
}

export async function updateTokens(dispatch: any) {
    if (!isAuthenticated()) {
        if (isRefreshTokenValid()) {
            await dispatch(fetchRefreshTokens());
        } else {
            await dispatch(logoutUser());
        }
    }
}