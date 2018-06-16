import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import axios from 'axios';
import './profile.css';

export default class PersonalProfile extends Component {
    state = {
        user: ''
    }
// sets user data in local storage if session data does not exist then it runs the api call to reset it
    componentDidMount(){
        const cachedUser = sessionStorage.getItem('user');
        console.log(cachedUser);
        
        if (cachedUser != "undefined" && JSON.parse(cachedUser) != null) {
            this.setState({
                user: JSON.parse(cachedUser)
            });
            return;
        }
        axios.get('/user/user_data').then(response => {
            let user = response.data[0];
            this.onSetResult(user)
        })
    }

    onSetResult = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({
            user: user
        });
    }

    render() {
        return (
            <div>
                {this.state.user ? <ProfileDisplay user={this.state.user}/> : 'please log in'}
            </div>
        );
    }
}