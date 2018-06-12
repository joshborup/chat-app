import React, { Component } from 'react';
import HomeDisplay from './HomeDisplay';
import './home.css';

export default class HomeContainer extends Component {
    render() {
        return (
            <div className='home-container'>
                <HomeDisplay/>
            </div>
        );
    }
}