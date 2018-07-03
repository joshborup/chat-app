import React, { Component } from 'react';
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
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: `${window.location.origin}/callback`,
      audience: 'https://joshborup.auth0.com/userinfo',
      responseType: 'token',
      scope: 'openid email profile'
    });
    this.auth0.authorize()
  }

  logout = () => {
    sessionStorage.clear();
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
          ''
          :
          <button className='login-button' onClick={this.login}>{this.props.label}</button>}
        </div>
      </div>
    );
  }
}

export default Login;

