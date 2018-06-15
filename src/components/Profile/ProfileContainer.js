import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import axios from 'axios';
import './profile.css';

export default class PersonalProfile extends Component {
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
    render() {
        return (
            <div>
                {this.state.user ? <ProfileDisplay user={this.state.user}/> : 'please log in'}
            </div>
        );
    }
}