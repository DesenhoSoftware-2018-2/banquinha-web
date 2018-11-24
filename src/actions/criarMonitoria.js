import axios from 'axios';

const HOST = 'http://localhost:8000/monitoria/';

export default function CriarMonitoria(mentor, nome, imagem, tag, data, conteudo){
    axios.post('http://localhost:8000/monitoria/', {
        mentor:mentor,
        nome:nome,
        imagem:imagem,
        tag:tag,
        dataHora:data,
        conteudo:conteudo
    });
}