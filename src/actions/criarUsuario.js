import axios from 'axios';

const HOST = 'http://localhost:8000/usuario/';

export default function CriarUsuario(nome, email, senha){
    axios.post(`${HOST}`, {
        nome : nome,
        email : email,
        senha : senha
    });
}
