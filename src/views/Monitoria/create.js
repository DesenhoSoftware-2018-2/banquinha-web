import React, { Component } from 'react';
import InputField from '../../components/CriarMonitoria/inputField';
import CriarMonitoria from '../../actions/criarMonitoria';
import SideNav from '../../components/sidenav/sidenav';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      conteudo: '',
      tag: '',
      imagem: '',
      data: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const valido = true;
    const cadastroValido = this.validaCadastro();
    if(cadastroValido === valido) {
      alert(this.state.nome + 'And' +
            this.state.conteudo +
            this.state.tag +
            this.state.imagem +
            this.state.data + 'Was submited');
      CriarMonitoria("10" , this.state.nome, this.state.imagem,
                     this.state.tag, this.state.data, this.state.conteudo);
    }
    event.preventDefault();
  }

  isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }

  validaCampos() {
    if (this.isEmptyOrSpaces(this.state.nome) ||
        this.isEmptyOrSpaces(this.state.conteudo) ||
        this.isEmptyOrSpaces(this.state.tag) ||
        this.isEmptyOrSpaces(this.state.imagem) ||
        this.isEmptyOrSpaces(this.state.data)){
      return false;
    } else {
      return true;
    }
  }

  validaCadastro() {
    const invalido = false;
    const campos = this.validaCampos();
    if (campos === invalido) {
      alert('Preencha todos os campos corretamente');
      return false;
    } else {
      return true;
    }
  }


  render() {

    return(

      <div>
        <SideNav />
        <form onSubmit={this.handleSubmit} >
          <InputField
            name="nome"
            type="text"
            placeholder="Nome:"
            value={this.state.nome}
            handleChange={this.handleChange}
          />
          <InputField
            name="conteudo"
            type="text"
            placeholder="Conteudo:"
            value={this.state.conteudo}
            handleChange={this.handleChange}
          />
          <InputField
            name="tag"
            type="text"
            placeholder="Tag:"
            value={this.state.tag}
            handleChange={this.handleChange}
          />
          <InputField
            name="imagem"
            type="file"
            placeholder="Imagem"
            value={this.state.imagem}
            handleChange={this.handleChange}
          />
          <InputField
            name="data"
            type="datetime-local"
            placeholder="Data:"
            value={this.state.data}
            handleChange={this.handleChange}
          />
        <a className="waves-effect waves-light btn-small" onClick={this.handleSubmit}>Cadastrar</a>
      </form>
    </div>



    );
  }
}

export default Create;
