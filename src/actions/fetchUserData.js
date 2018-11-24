import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const LOGOUT_USER = 'LOGOUT_USER';
const URL_API = 'http://api.jsonbin.io/b/5bf6fcab746e9b593ec19ca8';
const HOST = URL_API;

export const FetchUserData = () => {
    const request = axios.get(HOST);
    console.log(request);
    return{
        type: FETCH_USER_DATA,
        payload: request,
    };
};

export const LogoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: {},
    }
}