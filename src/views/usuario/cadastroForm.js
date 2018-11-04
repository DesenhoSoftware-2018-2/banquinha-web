import React, { Component } from 'react';
import criarUsuario from '../../actions/criarUsuario';

class CadastroForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <div>
        <h1>cadastro</h1>
      </div>
    )
  }
}
export default CadastroForm;
