import React, { Component } from 'react';
import HomeDisplay from './HomeDisplay';
import axios from 'axios';
import './home.css';

export default class HomeContainer extends Component {
    constructor(){
        super()
        this.state = {
            user:''
        }
    }
    componentDidMount(){
        axios.get('/user/user_data').then(response => {
            this.setState({
                user: response.data[0]
            })
           
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