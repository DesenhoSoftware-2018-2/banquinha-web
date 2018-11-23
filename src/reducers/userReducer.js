import { FETCH_USER_DATA, LOGOUT_USER } from '../actions/fetchUserData';

const currentUser = {
    name: "",
    lastName: "",
    username: "",
    email: "",
    job: "",
    image: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    bio: "",
    avaliacoes: {
        monitorias: 0,
        mentorado: 0,
        conferencias: 0,
        geral: 0
    }
}

export default function (state = currentUser, action) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return action.payload.data;
        case LOGOUT_USER:
            return state;
        default:
            return state;
    }
}