import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
const URL_API = 'http://api.jsonbin.io/b/5bf6fcab746e9b593ec19ca8';
const HOST = URL_API;

export const FetchUserData = () => {
    const request = axios.get(HOST);
    return{
        type: FETCH_USER_DATA,
        payload: request,
    };
};