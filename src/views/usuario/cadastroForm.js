import React, { Component } from 'react';
import criarUsuario from '../../actions/criarUsuario';
import CadastroInputForm from './cadastroInputForm';

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
        <form >
          <div className="container" style={{ marginTop: 50 }} >
            <CadastroInputForm
              name = "nome"
              type = "text"
              placeholder = "Nome:"
              value = {this.state.nome}
              // handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "email"
              type = "text"
              placeholder = "Email:"
              value = {this.state.email}
              // handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "senha"
              type = "text"
              placeholder = "Senha:"
              value = {this.state.senha}
              // handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "confirmarSenha"
              type = "text"
              placeholder = "Confirmar senha:"
              value = {this.state.senha}
              // handleChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
export default CadastroForm;
