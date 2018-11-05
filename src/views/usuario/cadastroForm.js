import React, { Component } from 'react';
import CriarUsuario from '../../actions/criarUsuario';
import CadastroInputForm from './cadastroInputForm';
import Sign from "../../components/sign-up/sign-up";

class CadastroForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      senhaConfirmada: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    const valido = true;
    const cadastroValido = this.validaCadastro();
    if(cadastroValido === valido) {
      CriarUsuario(this.state.nome, this.state.email, this.state.senha);
    }
    event.preventDefault();
  }

  validaSenhaConfirmada() {
    if (this.state.senha !== this.state.senhaConfirmada) {
      return false;
    } else {
      return true;
    }
  }

  validaCampos() {
    if (this.state.nome === '' ||
      this.state.email === '' ||
      this.state.senha === '') {
      return false;
    } else {
      return true;
    }
  }

  validaEmail() {
    const inicio = 1;
    const caracteresMin = 2;

    // check @ not starting the emailAdress
    const atSymbol = this.state.email.indexOf('@');
    if (atSymbol < inicio) return false;

    // check emailAdress to have . and to have at least 2 characters between @ and .
    const dot = this.state.email.indexOf('.');
    if (dot <= atSymbol + caracteresMin) return false;

    // check that the dot is not at the end
    if (dot === this.state.userEmail.length - inicio) return false;
    return true;
  }

  validaCadastro() {
    const invalido = false;
    const campos = this.validaCampos();
    const senha = this.validaSenhaConfirmada();
    const email = this.validaEmail();
    if (campos === invalido) {
      alert('Preencha todos os campos corretamente');
      return false;
    } else if (senha === invalido) {
      alert('As senhas não correspondem');
      return false;
    } else if (email === invalido) {
      alert('Email inválido');
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="row">
      <div className="col l6 offset-l3 s12 m8 offset-m2" style={{ marginTop: 50 }}>
        <form >
        <div className="card large">
        <div className="center" style={{ paddingTop: 50 }} >
        <span className="card-title center"> Cadastre-se </span>
        </div>
          <div className="container">
            <CadastroInputForm
              name = "nome"
              type = "text"
              placeholder = "Nome"
              value = {this.state.nome}
              handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "email"
              type = "text"
              placeholder = "Email"
              value = {this.state.email}
              handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "senha"
              type = "text"
              placeholder = "Senha"
              value = {this.state.senha}
              handleChange={this.handleChange}
            />
            <CadastroInputForm
              name = "confirmarSenha"
              type = "text"
              placeholder = "Confirmar senha"
              value = {this.state.senhaConfirmada}
              handleChange={this.handleChange}
            />
            <button
              className="waves-effect waves-light btn-small left" 
              onClick={this.handleSubmit}>Já tem um cadastro? Faça login
            </button>
            <button
              className="waves-effect waves-light btn-small right"
              onClick={this.handleSubmit}>Cadastrar
            </button>
          </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
}
export default CadastroForm;
