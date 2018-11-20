import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
const URL_API = 'https://api.myjson.com/bins/auc9q';
const HOST = URL_API;

export const FetchUserData = () => {
    const request = axios.get(HOST);
    return{
        type: FETCH_USER_DATA,
        payload: request,
    };
};