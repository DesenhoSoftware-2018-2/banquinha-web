import { FETCH_EVENTS } from '../actions/fetchEvents';

const events = [{
  "mentor": {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": ""
  },
  "mentored": {},
  "date": "",
  "image": "",
  "tag": {},
  "content": "",
  "name": ""
},
{
  "mentor": {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": ""
  },
  "mentored": {},
  "date": "",
  "image": "",
  "tag": {},
  "content": "",
  "name": ""
},
{
  "mentor": {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": ""
  },
  "mentored": {},
  "date": "",
  "image": "",
  "tag": {},
  "content": "",
  "name": ""
},
{
  "mentor": {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": ""
  },
  "mentored": {},
  "date": "",
  "image": "",
  "tag": {},
  "content": "",
  "name": ""
},
{
  "mentor": {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": ""
  },
  "mentored": {},
  "date": "",
  "image": "",
  "tag": {},
  "content": "",
  "name": ""
}]

export default function (state = events, action) {
    switch (action.type) {
        case FETCH_EVENTS:
          return action.payload.data;
        default:
          return state;
    }
}