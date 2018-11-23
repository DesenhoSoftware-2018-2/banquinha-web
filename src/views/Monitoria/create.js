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

  adaptFilePath(path){
    var filename = path.replace(/^.*\\/, "");
    this.state.imagem=filename
  }

  adaptDateTimeFormat(dateTime){
    var formatedDateTime = dateTime.replace('T','-');
    this.state.data = formatedDateTime
  }

  handleSubmit(event) {
    const valido = true;
    const cadastroValido = this.validaCadastro();
    if(cadastroValido === valido) {
      this.adaptFilePath(this.state.imagem)
      this.adaptDateTimeFormat(this.state.data)
      alert(this.state.nome + ', ' +
            this.state.conteudo + ', ' +
            this.state.tag + ', ' +
            this.state.imagem + ', ' +
            this.state.data + ' Submited');
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

      <div id='createMonitoria'>
        <SideNav />
        
        <div className='card' id='monitoriaForm'>
        <div id='formInputs'>
          <form onSubmit={this.handleSubmit} >
            <InputField
              labelId='monitoriaLabel'
              name="nome"
              type="text"
              placeholder="Nome:"
              value={this.state.nome}
              handleChange={this.handleChange}
            />
            <InputField
              labelId='monitoriaLabel'
              name="conteudo"
              type="text"
              placeholder="Conteudo:"
              value={this.state.conteudo}
              handleChange={this.handleChange}
            />
            <InputField
              labelId='monitoriaLabel'
              name="tag"
              type="text"
              placeholder="Tag:"
              value={this.state.tag}
              handleChange={this.handleChange}
            />
            <InputField
              labelId='monitoriaLabel'
              name="imagem"
              type="file"
              placeholder="Selecione uma imagem:"
              value={this.state.imagem}
              handleChange={this.handleChange}
            />
            <br/>
            <InputField
              labelId='monitoriaLabel'
              name="data"
              type="datetime-local"
              placeholder="Data:"
              value={this.state.data}
              handleChange={this.handleChange}
            />
        </form>
        <a id='createMonitoriaButton' className="waves-effect waves-light btn-small" onClick={this.handleSubmit}>Cadastrar</a>
      </div>
      </div>
    </div>



    );
  }
}

export default Create;
