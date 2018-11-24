import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logarUsuario from "../../actions/logarUsuario";
import { FetchUserData } from "../../actions/fetchUserData";
import InputForm from "../sign-up/InputForm";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    //const valido = true;
    //const cadastroValido = this.validaCadastro();
    //if(cadastroValido === valido) {
    const email = this.state.email;
    const senha = this.state.senha;
    logarUsuario(email, senha);
    //}
    event.preventDefault();
  }

  validaCampos() {
    if (this.state.email === "" || this.state.senha === "") {
      return false;
    } else {
      return true;
    }
  }

  validaEmail() {
    const inicio = 1;
    const caracteresMin = 2;

    // check @ not starting the emailAdress
    const atSymbol = this.state.email.indexOf("@");
    if (atSymbol < inicio) return false;

    // check emailAdress to have . and to have at least 2 characters between @ and .
    const dot = this.state.email.indexOf(".");
    if (dot <= atSymbol + caracteresMin) return false;

    // check that the dot is not at the end
    //if (dot === this.state.userEmail.length - inicio) return false;
    return true;
  }

  validaCadastro() {
    const invalido = false;
    const campos = this.validaCampos();
    const senha = this.state.senha;
    // const email = this.validaEmail();
    console.log("passou das constantes");
    if (campos === invalido) {
      alert("Preencha todos os campos corretamente");
      console.log("passou da validação do campo");
      return false;
    } else if (senha === invalido) {
      alert("As senhas não correspondem");
      console.log("passou da validação da senha");
      return false;
    } //else if (email === invalido) {
    //alert('Email inválido');
    //return false;
    //}
    else {
      console.log("passou de tudo da validaCadastro");
      return true;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <div className="container">
            <InputForm
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              handleChange={this.handleChange}
            />
            <InputForm
              name="senha"
              type="password"
              placeholder="Senha:"
              value={this.state.senha}
              handleChange={this.handleChange}
            />
            <Link
              className="waves-effect waves-light btn-small left cadastro-btn"
              to="/cadastro"
            >
              Ainda não tem um cadastro?
            </Link>
            <Link
              to="/"
              className="waves-effect waves-light btn-small right login-btn"
            >
              Entrar
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData() {
      dispatch(FetchUserData());
    }
  };
};

export default connect(mapDispatchToProps)(LoginForm);
