import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import HeaderLinks from '../shared/HeaderLinks';
import axios from 'axios';
import monkey from './media/monkeylogo.svg'
import './header.css';

export default class Header extends Component {

    state = {
        user: ''
    }

    componentDidMount(){

        axios.get('/user/user_data').then(response => {
            console.log(response)
            this.setState({
                user: response.data[0]
            })
        })
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
        console.log(this.state.user);
        return (
            <div className='header-container'>
                <div>
                    <div>
                        <img src={monkey} alt='monkey head logo' />
                    </div>
                    {this.state.user ? 
                    <div className='inner-header-container'>
                        <HeaderLinks />
                        <button onClick={this.logout}>Logout</button>
                    </div>
                    :
                    <Login />
                    }
                </div>
            </div>
        );
    }
}