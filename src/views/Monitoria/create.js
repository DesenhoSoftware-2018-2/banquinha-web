import React, { Component } from 'react';
import InputField from './inputField';
class Create extends Component {

  render() {
    return(
      <div>
        <InputField type="text" placeholder="Nome:"/>
        <InputField type="text" placeholder="Conteudo:"/>
        <InputField type="text" placeholder="Tag:"/>
        <InputField type="file" placeholder="Imagem"/>
        <InputField type="datetime-local" placeholder="Data:"/>
      </div>


       
    );
  }
}

export default Create;
