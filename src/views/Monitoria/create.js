import React, { Component } from 'react';
import InputField from './inputField';

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
    console.log(event.target.name + 'value' + event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.nome + 'And' +
          this.state.conteudo +
          this.state.tag +
          this.state.imagem +
          this.state.data + 'Was submited');
    event.preventDefault();
  }

  render() {

    return(

      <div>
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
