import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as auth0 from 'auth0-js';
import axios from 'axios';
import './login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount(){
    console.log('componentDidMount')
        axios.get('/user/user_data').then(response => {
          console.log(response)
            this.setState({
                user: response.data
            })
        })
    }

  login = () => {
    
    this.auth0 = new auth0.WebAuth({
      domain: 'joshborup.auth0.com',
      clientID: 'Hu0tt3KxizbhLTKxAhgXepjgPJwdvyvq',
      redirectUri: `${window.location.origin}/callback`,
      audience: 'https://joshborup.auth0.com/userinfo',
      responseType: 'token',
      scope: 'openid email profile'
    });
    this.auth0.authorize()
  }

  logout = () => {
    axios.post('/user/logout').then(() => {
      this.setState({
           user: null
         });
    });
    window.location.href = '/';
  }


  render() {
    
   
    return (
      <div className="login">
        <div>
        
          {
          this.state.user
          ?
          <div>
            <button className='logout-button' onClick={this.logout}>LOG OUT</button>
            <a href='/group/cool'>Chat</a>
            
          </div>
           :
          <button className='login-button' onClick={this.login}>LOGIN</button>}
        </div>
      </div>
    );
  }
}

export default Login;