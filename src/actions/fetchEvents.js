import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
const URL_API = 'https://api.myjson.com/bins/17uz5y';
const HOST = URL_API;

export const FetchEvents = () => {
    const request = axios.get(HOST);
    return{
        type: FETCH_EVENTS,
        payload: request,
    };
};