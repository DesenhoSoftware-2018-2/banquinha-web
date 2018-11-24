import axios from 'axios';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';

export default function logarUsuario(email, senha){
  const HOST = 'http://localhost:8000/login/';
  const data = {
    email: email,
    password: senha,
    active: true,
  };

  const request = axios.put(`${HOST}`, data);

  return {
    type: USER_LOGIN_REQUEST,
    payload: request,
  }
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};
