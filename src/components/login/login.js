import React, {Component} from 'react';
import LoginForm from '../../views/usuario/loginForm';

class Login extends Component {

    render(){
        return(
          <div className="row">
            <div className="col l6 offset-l3 s12 m8 offset-m2" style={{ marginTop: 50 }}>
              <form>
              <div className="card large">
                <div className="center" style={{ paddingTop: 50 }} >
                  <span className="card-title center"> Login </span>
                  <LoginForm />
                </div>
              </div>
              </form>
            </div>
          </div>
        );
    }
} export default Login;
