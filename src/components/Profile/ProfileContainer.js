import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import axios from 'axios';
import './profile.css';

export default class PersonalProfile extends Component {
    state = {
        user: ''
    }

    componentDidMount(){
        
            console.log('hit', localStorage.getItem('user'))
            let user = JSON.parse(localStorage.getItem('user'))
            this.setState({
                user: user
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