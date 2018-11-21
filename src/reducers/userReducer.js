import { FETCH_USER_DATA } from '../actions/fetchUserData';

const currentUser = {
    nome: "",
    usernam: "",
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
        default:
            return state;
    }
}