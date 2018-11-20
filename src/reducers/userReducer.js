import { FETCH_USER_DATA } from '../actions/fetchUserData';

const currentUser = {
    nome: "",
    image: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    bio: ""
}

export default function (state = currentUser, action) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return action.payload.data;
        default:
            return state;
    }
}