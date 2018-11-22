import React, { Component } from 'react';
import ProfileNavbar from '../../components/navbar/profileNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

class EditProfile extends Component{

    constructor(props) {
        super(props);
        this.state={}
    }

    componentDidMount() {
        document.querySelectorAll('.form');
        M.updateTextFields();
    }

    render(){
        const currentUser = this.props.currentUser;  
        return(
            <div>
                <ProfileNavbar />
                <div class="row container profile-form">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input value={`${currentUser.name}`} id="first_name" type="text" class="validate" />
                                    <label class="active" for="first_name">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.lastName}`} id="last_name" type="text" class="validate" />
                                    <label class="active" for="last_name">Sobrenome</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.username}`} id="username" type="text" class="validate" />
                                    <label class="active" for="username">Nome de Usuário</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.job}`} id="job" type="text" class="validate" />
                                    <label class="active" for="job">Emprego</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input value={`${currentUser.email}`} id="email" type="email" class="validate" />
                                    <label class="active" for="email">Email</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value="teste" id="password" type="password" class="validate" />
                                    <label for="password">Senha</label>
                                </div>
                            </div>
                            <hr class="style14" />
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea value={`${currentUser.bio}`} id="textarea2" class="materialize-textarea" data-length="240"></textarea>
                                    <label for="textarea2">Biografia</label>
                                </div>
                            </div>
                            <div class="row">
                            <div class="input-field col s6">
                                    <input value={`${currentUser.facebook}`} id="facebook" type="text" class="validate" />
                                    <label class="active" for="facebook">Facebook</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.linkedin}`} id="linkedin" type="text" class="validate" />
                                    <label class="active" for="linkedin">Linkedin</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.instagram}`} id="instagram" type="text" class="validate" />
                                    <label class="active" for="instagram">Instagram</label>
                                </div>
                                <div class="input-field col s6">
                                    <input value={`${currentUser.twitter}`} id="twitter" type="text" class="validate" />
                                    <label class="active" for="twitter">Twitter</label>
                                </div>
                            </div>
                            <hr class="style14" />
                            <div class="row btn-form">
                                <Link to="/perfil" class="waves-effect waves-light btn save-button">Salvar</Link>
                                <Link to="/perfil" class="waves-effect waves-light btn">Cancelar</Link>
                            </div>  
                        </form>
                    </div>
                </div>
        );
    }
}

EditProfile.PropTypes = {
    currentUser: PropTypes.object,
}

EditProfile.defaultProps = {
    currentUser: {},
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(EditProfile);