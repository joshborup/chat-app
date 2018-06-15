import React, { Component } from 'react';
import HomeDisplay from './HomeDisplay';
import axios from 'axios';
import './home.css';

export default class HomeContainer extends Component {
    componentDidMount(){
        axios.get('/user/user_data').then(response => {
            if(localStorage.getItem('user')){
            let user = JSON.stringify(response.data[0])
            localStorage.setItem('user', user)
            console.log(localStorage.getItem('user'));
            }
        })
    }
    render() {
        return (
            <div className='home-container'>
                <HomeDisplay/>
            </div>
        );
    }
}