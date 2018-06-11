import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import HeaderLinks from '../shared/HeaderLinks';
import axios from 'axios';
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
                        {'logo here'}
                    </div>
                    {this.state.user ? 
                    <div>
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